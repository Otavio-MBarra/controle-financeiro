import Transaction from "./Transaction.js";

const form = document.getElementById("transaction-form");
let getTransationsJSON = localStorage.getItem("transactions");
let transactions = JSON.parse(getTransationsJSON) || [];
const transactionsList = document.querySelector(".transactionsList");
const cleanBtn = document.getElementById("clean-local");
cleanBtn.addEventListener("click", () => {
  localStorage.clear();
});

// transactionsList.innerHTML = `<div class="recordedTransaction">
//         <img src="https://picsum.photos" alt="" />
//         <div class="descriptionTransaction">
//           <p class="descriptionTransactionText">salario</p>
//           <p class="transactionDate">25 jun</p>
//           <p class="transactionCategory">lazer</p>
//         </div>
//         <p class="transactionValueText">+R$ 1000,00</p>
//       </div>`;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const values = Object.fromEntries(data.entries());
  console.log(values.typeTransaction);

  const transaction = new Transaction(
    values.transactionValue,
    values.transactionDescription,
    values.transactionCategory,
    values.transactionDate,
    values.transactionPayment,
    values.typeTransaction,
  );
  transactions.push(transaction);
  localStorage.setItem("transactions", JSON.stringify(transactions));
  console.log(transactions);
});

transactions.forEach((transaction) => {
  transactionsList.innerHTML = `<div class="recordedTransaction">
        <img src="https://picsum.photos" alt="" />
        <div class="descriptionTransaction">
          <p class="descriptionTransactionText">${transaction.description}</p>
          <p class="transactionDate">${transaction.date}</p>
          <p class="transactionCategory">${transaction.category}</p>
        </div>
        <p class="transactionValueText">${transaction.value}</p>
      </div>`;
});

transactions.reduce((acc, curent) => {});

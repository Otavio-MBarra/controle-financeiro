import Transaction from "./Transaction.js";
import transactionRenderer from "./TransactionRenderer.js";

const form = document.getElementById("transaction-form");
let getTransationsJSON = localStorage.getItem("transactions");
let transactions = JSON.parse(getTransationsJSON) || [];
const transactionsList = document.querySelector(".transactionsList");
const cleanBtn = document.getElementById("clean-local");
cleanBtn.addEventListener("click", () => {
  localStorage.clear();
});

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
  transactions.unshift(transaction);
  localStorage.setItem("transactions", JSON.stringify(transactions));
  transactionRenderer(transactions, transactionsList);
});

transactionRenderer(transactions, transactionsList);

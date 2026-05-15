import Transaction from "./Transaction.js";

const form = document.getElementById("transaction-form");
let transactions = [];

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
  console.log(transactions);
});

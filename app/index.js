import Transaction from "./Transaction.js";

const form = document.getElementById("transaction-form");
let transactions = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const values = Object.fromEntries(data.entries());
  console.log(typeof values["transaction-value"]);
  const transaction = new Transaction(
    parseFloat(values["transaction-value"]),
    values["transaction-description"],
    values["transaction-category"],
    values["transaction-date"],
    values["transaction-payment"],
  );
  transactions.push(transaction);
  console.log(transactions);
});

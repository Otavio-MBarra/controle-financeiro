import Transaction from "./Transaction.js";
import transactionRenderer from "./TransactionRenderer.js";
import balanceRenderer from "./BalanceRenderer.js";

const form = document.getElementById("transaction-form");
let getTransationsJSON = localStorage.getItem("transactions");
let transactions = JSON.parse(getTransationsJSON) || [];
const transactionsList = document.querySelector(".transactionsList");
const h2ShowBalance = document.querySelector(".showBalance");
const pMonthlyExpenseValue = document.querySelector(".monthly-expenses-value");
const pRecipeMonthValue = document.querySelector(".recipe-month-value");

const cleanBtn = document.getElementById("clean-local");
cleanBtn.addEventListener("click", () => {
  localStorage.clear();
  transactionRenderer();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const values = Object.fromEntries(data.entries());

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
  balanceRenderer(
    transactions,
    h2ShowBalance,
    pMonthlyExpenseValue,
    pRecipeMonthValue,
  );
});

transactionRenderer(transactions, transactionsList);
balanceRenderer(
  transactions,
  h2ShowBalance,
  pMonthlyExpenseValue,
  pRecipeMonthValue,
);

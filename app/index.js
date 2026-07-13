import transactionRenderer from "./TransactionRenderer.js";
import balanceRenderer from "./BalanceRenderer.js";
import transactionService from "./TransactionService.js";
import saveTransaction from "./SaveTransaction.js";

const form = document.getElementById("transaction-form");
let getTransationsJSON = localStorage.getItem("transactions");
let transactions = JSON.parse(getTransationsJSON) || [];
const transactionsList = document.querySelector(".transactionsList");
const h2ShowBalance = document.querySelector(".showBalance");
const pMonthlyExpenseValue = document.querySelector(".monthly-expenses-value");
const pRecipeMonthValue = document.querySelector(".recipe-month-value");

const radioOptions = document.querySelectorAll(
  "input[name='transactionInstallment']",
);
const credCardOption = document.querySelector(
  "select[name='transactionPayment']",
);
const inputInstalment = document.getElementById("installment-count-wrapper");
const showInstallmentModal = document.querySelector(".modal-installment");

const cleanBtn = document.getElementById("clean-local");
cleanBtn.addEventListener("click", () => {
  localStorage.clear();
  transactionRenderer();
});

credCardOption.addEventListener("change", (element) => {
  toggleHidden(element, "Cartão de Crédito", showInstallmentModal);
});

radioOptions.forEach((option) => {
  option.addEventListener("change", (element) => {
    toggleHidden(element, "yes", inputInstalment);
  });
});

function toggleHidden(element, criteri, toggleElement) {
  if (element.target.value === criteri) {
    toggleElement.hidden = false;
  } else {
    toggleElement.hidden = true;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  transactionService(event, transactions);
  saveTransaction(transactions);
  loadData(
    transactions,
    transactionsList,
    h2ShowBalance,
    pMonthlyExpenseValue,
    pRecipeMonthValue,
  );
  console.log(transactions);
});

function loadData(
  transactions,
  transactionsList,
  h2ShowBalance,
  pMonthlyExpenseValue,
  pRecipeMonthValue,
) {
  transactionRenderer(transactions, transactionsList);
  balanceRenderer(
    transactions,
    h2ShowBalance,
    pMonthlyExpenseValue,
    pRecipeMonthValue,
  );
}

loadData(
  transactions,
  transactionsList,
  h2ShowBalance,
  pMonthlyExpenseValue,
  pRecipeMonthValue,
);

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
  const data = new FormData(event.target);
  const values = Object.fromEntries(data.entries());
  // console.log(data);
  // console.log(values);

  function idGenerator() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let id = "";

    for (let i = 0; i < 4; i++) {
      id += chars[Math.floor(Math.random() * chars.length)];
    }

    return id;
  }
  let transaction;

  if (values.transactionPayment === "Cartão de Crédito") {
    transaction = new Transaction(
      values.transactionValue / values.transactionInstallmentCount,
      values.transactionDescription,
      values.transactionCategory,
      values.transactionDate,
      values.transactionPayment,
      values.typeTransaction,
      values.transactionInstallmentCount,
      1, //criiar função que acrescenta 1 ate chegar o maximo
      values.transactionValue,
      idGenerator(),
    );
  } else {
    transaction = new Transaction(
      values.transactionValue,
      values.transactionDescription,
      values.transactionCategory,
      values.transactionDate,
      values.transactionPayment,
      values.typeTransaction,
    );
  }

  console.log(transaction);

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

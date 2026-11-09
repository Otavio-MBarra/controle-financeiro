import getFinancialSummary from "./FinancialService.js";

export default function balanceRenderer(
  transactions,
  h2Total,
  pExpense,
  pRecipe,
) {
  const {
    income = 0,
    expense = 0,
    balance = 0,
  } = getFinancialSummary(transactions);
  const formatCurrency = (value) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  h2Total.textContent = formatCurrency(balance);
  h2Total.classList.toggle("is-negative", balance < 0);
  pExpense.textContent = formatCurrency(expense);
  pRecipe.textContent = formatCurrency(income);
}

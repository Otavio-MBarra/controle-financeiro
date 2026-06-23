import getFinancialSummary from "./FinancialService.js";

export default function balanceRenderer(
  transactions,
  h2Total,
  pExpense,
  pRecipe,
) {
  let {
    income = 0,
    expense = 0,
    balance = 0,
  } = getFinancialSummary(transactions);

  h2Total.textContent = `R$ ${balance}`;
  pExpense.textContent = `R$ ${expense}`;
  pRecipe.textContent = `R$ ${income}`;
}

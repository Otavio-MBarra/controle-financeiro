export default function balanceRenderer(
  transactions,
  h2Total,
  pExpense,
  pRecipe,
) {
  let balance = transactions.reduce((acc, current) => {
    if (acc[current.incomeexpense]) {
      acc[current.incomeexpense] =
        parseFloat(current.value) + parseFloat(acc[current.incomeexpense]);
    } else {
      acc[current.incomeexpense] = parseFloat(current.value);
    }

    return acc;
  }, {});
  console.log(balance);
  h2Total.textContent = `R$ ${(balance.income || 0) - (balance.expense || 0)}`;
  pExpense.textContent = `R$ ${balance.expense || 0}`;
  pRecipe.textContent = `R$ ${balance.income || 0}`;
}

export default function getFinancialSummary(transactions) {
  return transactions.reduce((acc, current) => {
    if (acc[current.incomeexpense]) {
      acc[current.incomeexpense] =
        parseFloat(current.value) + parseFloat(acc[current.incomeexpense]);
    } else {
      acc[current.incomeexpense] = parseFloat(current.value);
    }

    acc.balance = (acc.income || 0) - (acc.expense || 0);

    return acc;
  }, {});
}

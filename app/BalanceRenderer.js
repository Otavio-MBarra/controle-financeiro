export default function balanceRenderer(transactions, h2ShowBalance) {
  let balance = transactions.reduce((acc, current) => {
    return current.incomeexpense === "income"
      ? (acc += parseFloat(current.value))
      : (acc -= parseFloat(current.value));
  }, 0);
  h2ShowBalance.textContent = `R$ ${balance}`;
}

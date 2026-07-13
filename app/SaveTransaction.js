export default function saveTransaction(transactions) {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

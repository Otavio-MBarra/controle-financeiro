export default function transactionRenderer(transactions, transactionsList) {
  if (transactions.length === 0) {
    transactionsList.innerHTML =
      '<p class="empty-state">Nenhuma transação por enquanto.</p>';
    return;
  }

  transactionsList.innerHTML = transactions
    .map((transaction) => {
      const isExpense = transaction.incomeexpense === "expense";
      const value = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(transaction.value);
      const date = transaction.date
        ? new Date(`${transaction.date}T00:00:00`).toLocaleDateString("pt-BR")
        : "";

      return `<article class="recordedTransaction ${isExpense ? "is-expense" : "is-income"}" data-idtransaction="${transaction.installmentGroupId}">
        <div class="descriptionTransaction">
          <p class="descriptionTransactionText">${transaction.description}</p>
          <div class="transaction-meta">
            <p class="transactionDate">${date}</p>
            <p class="transactionCategory">${transaction.category}</p>
            <p>${transaction.payment}</p>
          </div>
        </div>
        <p class="transactionValueText">${isExpense ? "−" : "+"} ${value}</p>
        <button class="teste-excluir" type="button">Excluir</button>
      </article>`;
    })
    .join("");
}

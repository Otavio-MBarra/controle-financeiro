export default function transactionRenderer(transactions, transactionsList) {
  let transactionsHTML = transactions.reduce((acc, curent) => {
    return (
      acc +
      ` <div class="recordedTransaction " data-IdTransaction="${curent.installmentGroupId}">
         <img src="https://picsum.photos" alt="" />
         <div class="descriptionTransaction ">
           <p class="descriptionTransactionText">${curent.description}</p>
           <p class="transactionDate">${curent.date}</p>
           <p class="transactionCategory">${curent.category}</p>
         </div>
         <p class="transactionValueText">${curent.value}</p>
         <button class="teste-excluir">Excluir</button>
       </div>`
    );
  }, ``);
  transactionsList.innerHTML = transactionsHTML;
}

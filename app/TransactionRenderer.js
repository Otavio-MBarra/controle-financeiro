export default function transactionRenderer(transactions, transactionsList) {
  let transactionsHTML = transactions.reduce((acc, curent) => {
    return (
      acc +
      ` <div class="recordedTransaction">
         <img src="https://picsum.photos" alt="" />
         <div class="descriptionTransaction">
           <p class="descriptionTransactionText">${curent.description}</p>
           <p class="transactionDate">${curent.date}</p>
           <p class="transactionCategory">${curent.category}</p>
         </div>
         <p class="transactionValueText">${curent.value}</p>
       </div>`
    );
  }, ``);
  transactionsList.innerHTML = transactionsHTML;
}

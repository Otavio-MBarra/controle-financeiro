import Transaction from "./Transaction.js";

function idGenerator() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";

  for (let i = 0; i < 4; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }

  return id;
}

export default function transactionService(dataForm, transactions) {
  const data = new FormData(dataForm.target);
  const values = Object.fromEntries(data.entries());
  let transaction;
  const groupId = idGenerator();

  if (values.transactionPayment === "Cartão de Crédito") {
    for (let i = 1; i <= values.transactionInstallmentCount; i++) {
      transaction = new Transaction({
        value: values.transactionValue / values.transactionInstallmentCount,
        description: values.transactionDescription,
        category: values.transactionCategory,
        date: values.transactionDate,
        payment: values.transactionPayment,
        incomeexpense: values.typeTransaction,
        installmentTotal: values.transactionInstallmentCount,
        installmentNumber: i,
        totalValue: values.transactionValue,
        installmentGroupId: groupId,
      });
      transactions.push(transaction);
    }
  } else {
    transaction = new Transaction({
      value: values.transactionValue,
      description: values.transactionDescription,
      category: values.transactionCategory,
      date: values.transactionDate,
      payment: values.transactionPayment,
      incomeexpense: values.typeTransaction,
      installmentGroupId: groupId,
    });
    transactions.unshift(transaction);
  }
}

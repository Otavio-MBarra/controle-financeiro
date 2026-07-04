export default class Transaction {
  constructor(
    value,
    description,
    category,
    date,
    payment,
    incomeexpense,
    installmentTotal,
    installmentNumber,
    totalValue,
    installmentGroupId,
  ) {
    this.value = value;
    this.description = description;
    this.category = category;
    this.date = date;
    this.payment = payment;
    this.incomeexpense = incomeexpense;
    this.installmentTotal = installmentTotal;
    this.installmentNumber = installmentNumber;
    this.totalValue = totalValue;
    this.installmentGroupId = installmentGroupId;
  }
}

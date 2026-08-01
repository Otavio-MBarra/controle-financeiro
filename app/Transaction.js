export default class Transaction {
  constructor({
    value,
    description,
    category,
    date,
    payment,
    incomeexpense,
    installmentTotal = null,
    installmentNumber = null,
    totalValue = null,
    installmentGroupId = null,
  }) {
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

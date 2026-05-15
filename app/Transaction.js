export default class Transaction {
  constructor(value, description, category, date, payment, incomeexpense) {
    this.value = value;
    this.description = description;
    this.category = category;
    this.date = date;
    this.payment = payment;
    this.incomeexpense = incomeexpense;
  }
}

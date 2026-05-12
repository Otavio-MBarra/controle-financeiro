export default class Transaction {
  constructor(value, description, category, date, payment) {
    this.value = value;
    this.description = description;
    this.category = category;
    this.date = date;
    this.payment = payment;
  }
}

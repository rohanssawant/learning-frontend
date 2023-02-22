import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem({ title, date, amount }) {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">{title}</div>
      <div className="expense-item__price">${amount}</div>
    </div>
  );
}

export default ExpenseItem;

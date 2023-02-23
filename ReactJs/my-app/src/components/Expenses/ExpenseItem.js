import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem({ title, date, amount }) {
  const [varTitle, setTitle] = useState(title);
  const onClickHandler = () => {
    setTitle("updated");
    alert("Clicked");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{varTitle}</h2>
      </div>
      <div className="expense-item__price">${amount}</div>
      <button onClick={onClickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

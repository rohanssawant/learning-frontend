import { useState } from "react";
import "./ExpenseForm.css";
import "./NewExpenses.css";
function ExpenseForm(props) {
  /** useState mutiple times */
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /** This is how to manage in single state, not recommended */
  // const [userInputs, setUserInputs] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const titleChangeEventHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amtChangeEventHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeEventHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeEventHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={enteredAmount}
            onChange={amtChangeEventHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeEventHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onSaveBtnHandler}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;

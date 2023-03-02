import { useState } from "react";
import "./ExpenseForm.css";
import "./NewExpenses.css";
function ExpenseForm() {
  /** useState mutiple times */
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  /** This is how to manage in single state, not recommended */
  const [userInputs, setUserInputs] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeEventHandler = (event) => {
    console.log("titleChangeEventHandler: " + event.target.value);
    // setEnteredTitle(event.target.value);
    setUserInputs((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };

  const amtChangeEventHandler = (event) => {
    console.log("amtChangeEventHandler: " + event.target.value);
    // setEnteredAmount(event.target.value);
    setUserInputs((prevState) => {
      return {
        ...prevState,
        amount: event.target.value,
      };
    });
  };

  const dateChangeEventHandler = (event) => {
    console.log("dateChangeEventHandler: " + event.target.value);
    // setEnteredDate(event.target.value);
    setUserInputs((prevState) => {
      return {
        ...prevState,
        date: event.target.value,
      };
    });
  };
  return (
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={titleChangeEventHandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0.1"
          step="0.1"
          onChange={amtChangeEventHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" onChange={dateChangeEventHandler} />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </div>
  );
}

export default ExpenseForm;

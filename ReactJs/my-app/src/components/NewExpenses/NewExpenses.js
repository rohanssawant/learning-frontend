import { useState } from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
function NewExpenses(props) {
  const [isAddForm, setIsAddForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onSubmitExpense(expenseData);
    showFormHandler();
  };
  const showFormHandler = () => {
    if (isAddForm) return setIsAddForm(false);
    return setIsAddForm(true);
  };
  return (
    <div className="new-expense">
      {isAddForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onSaveBtnHandler={showFormHandler}
        />
      ) : (
        <button onClick={showFormHandler}>Add Expense</button>
      )}
    </div>
  );
}

export default NewExpenses;

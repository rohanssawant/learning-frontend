import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
function NewExpenses(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    console.log("this is expenseData: " + JSON.stringify(expenseData));
    props.onSubmitExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpenses;

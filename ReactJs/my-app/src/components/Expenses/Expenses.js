import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
function Expenses({ expenses }) {
  const [filterYear, setFilterYear] = useState("2020");
  const onFilterChangeHandler = (filter) => {
    console.log(filter);
    setFilterYear(filter);
  };

  const filteredExpenses = expenses.filter((e) => {
    return e.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={filterYear}
          onFilter={onFilterChangeHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
}
export default Expenses;

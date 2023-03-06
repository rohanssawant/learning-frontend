import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";
function Expenses({ expenses }) {
  const [filterYear, setFilterYear] = useState("2020");
  const onFilterChangeHandler = (filter) => {
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
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;

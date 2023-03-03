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
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={filterYear}
          onFilter={onFilterChangeHandler}
        />
        <ExpenseItem
          date={expenses[0].date}
          title={expenses[0].title}
          amount={expenses[0].amount}
        ></ExpenseItem>
        <ExpenseItem
          date={expenses[1].date}
          title={expenses[1].title}
          amount={expenses[1].amount}
        ></ExpenseItem>
        <ExpenseItem
          date={expenses[2].date}
          title={expenses[2].title}
          amount={expenses[2].amount}
        ></ExpenseItem>
        <ExpenseItem
          date={expenses[3].date}
          title={expenses[3].title}
          amount={expenses[3].amount}
        ></ExpenseItem>
      </Card>
    </div>
  );
}
export default Expenses;

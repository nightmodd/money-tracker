import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

function Expenses({ items }) {
  const [filteredYear, setYear] = useState("2023");

  function onFilter(ev) {
    setYear(ev.currentTarget.value);
  }
  
  const filteredData = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <div className="expenses-filter">
          <div className="expenses-filter__control">
            <label>Filter by year</label>
            <select onChange={onFilter} value={filteredYear}>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </select>
          </div>
        </div>

        <ExpensesChart expenses={filteredData} />
        <ExpensesList items={filteredData}  />
      </Card>
    </div>
  );
}
export default Expenses;

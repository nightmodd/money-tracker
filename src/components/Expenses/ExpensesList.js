import React, { useContext } from "react";
import { AuthContext } from "../../context/auth-context";

import Card from "../UI/Card";

import deleteImg from "../assets/delete.svg";
import "./ExpensesList.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

function ExpenseItem(props) {
  const ctx = useContext(AuthContext);
  
  function deleteExpenseHandler(ev) {
    const id = ev.currentTarget.parentElement.parentElement.parentElement.id;
    console.log(id);
    ctx.deleteExpenseHandler(id);

  }
  return (
    <li id={props.id}>
      <Card className="expense-item">
        <div className="expense-item__top">
          <button onClick={deleteExpenseHandler}>
            <img src={deleteImg} alt="delete icon"/>
          </button>
        </div>
        <div className="expense-item__description">
          <ExpenseDate date={props.date} />
          <div className="expense-item__info">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.price}</div>
          </div>
        </div>
      </Card>
    </li>
  );
}

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
          id={expense.id}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;

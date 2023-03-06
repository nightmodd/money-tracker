import React from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [editing, setEditing] = React.useState(false);

  function submitHandler(ev) {
    ev.preventDefault();

    const form = ev.currentTarget;
    const data = new FormData(form);

    const expenseData = {
      title: data.get("title"),
      price: Number(data.get("price")),
      date: new Date(data.get("date")),
      id: `A${Date.now()}`,
    };

    form.reset();

    props.onAddExpense(expenseData);
  }

  if (!editing) {
    return (
      <div className="new-expense">
        <button onClick={() => setEditing(true)}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" name="title" required />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input type="number" min="0.01" step="0.01" name="price" required />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2015-01-01"
              max="2023-12-31"
              name="date"
              required
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={() => setEditing(false)}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}
export default ExpenseForm;

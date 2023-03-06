import React, { useContext } from "react";
import Expenses from "./components/Expenses/Expenses";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
import { AuthContext } from "./context/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <div>
      <ExpenseForm onAddExpense={ctx.addExpenseHandler} />
      <Expenses items={ctx.expenses}  />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";

const StarterExpenses = [

];

export const AuthContext = React.createContext({
  expenses: StarterExpenses,
  addExpenseHandler: (expense) => { },
  deleteExpenseHandler: (expenseId) => { },
});





export const AuthContextProvider = (props) => {
  const [expenses, setExpenses] = useState([]);
  console.log(expenses);

  useEffect(() => {
    const storedUsersData = JSON.parse(localStorage.getItem("expenses"));
    if (storedUsersData) {
      const mappedData = storedUsersData.map((expense) => {
        return {
          ...expense,
          date: new Date(expense.date),
        };
      });

      setExpenses(mappedData);
    }
  }, []);

  function addExpenseHandler(expense) {
    setExpenses([expense, ...expenses]);
    localStorage.setItem("expenses", JSON.stringify([expense, ...expenses]));
  }

  function deleteExpenseHandler(expenseId) {
    const filteredExpenses = expenses.filter((expense) => {
      return expense.id !== expenseId;
    });
    setExpenses(filteredExpenses);
    localStorage.setItem("expenses", JSON.stringify(filteredExpenses));
  }

  return (
    <AuthContext.Provider
      value={{
        expenses: expenses,
        addExpenseHandler: addExpenseHandler,
        deleteExpenseHandler: deleteExpenseHandler,

    
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};



import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  { id: "e1", title: "Toilet Paper", amount: 94.12, date: new Date(2020, 7, 14) },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  { id: "e3", title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  { id: "e4", title: "New Desk (Wooden)", amount: 450, date: new Date(2021, 5, 12) },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  function addExpenseHandler(expense) {
    console.log("In App.js");
    console.log(expenses);
    //setExpenses([expense, ...expenses]); //update state based on previous state, wrong way
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    }); //update state based on previous state, correct way
  }

  // return React.createElement(
  //   'div', 
  //   {}, 
  //   React.createElement('h2', {}, "Lets get started"), 
  //   React.createElement(Expenses, {expenses: expenses})
  // ); //3 arguments.

  // JSX is converted into react code, and then that is converted into browser code.
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}></NewExpense>
      <Expenses expenses = {expenses}></Expenses>
    </div>
  );
}

export default App;

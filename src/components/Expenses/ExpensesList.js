import "./ExpensesList.css";
import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
    let expensesContent = <p className="expenses-list__fallback">No expenses found.</p>; //assign default value
    
    if (props.items.length > 0) {
        expensesContent = props.items.map((expense) => ( //key is needed, every item must be a unique id, index could cause bugs not directly attatched to content of item.
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
        ));
    }

    return <ul className="expenses-list">{expensesContent}</ul>;

};

export default ExpensesList;
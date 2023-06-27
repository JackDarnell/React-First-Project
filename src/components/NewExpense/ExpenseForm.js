import React, {useState} from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState(''); //onChange always returns a string

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    function titleChangeHandler(event) { //event object describes the event that occured
        setEnteredTitle(event.target.value);
        setUserInput(function(prevState) { //this function syntax always uses the latest state snapshot 
            return {
                ...prevState,
                enteredTitle: event.target.value //overwrites the entered title value
            }
        });
    }

    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value);
    }

    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault(); //prevents default behaviour of sending a request and reloading the page

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData); //funciton passed as a prop, then called with the expense data
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }



    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>;
}

export default ExpenseForm;
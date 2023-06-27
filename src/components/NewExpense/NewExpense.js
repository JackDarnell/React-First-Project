import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {

    const [addingExpense, setAddingExpense] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData) { //entered expense data is the value from expense form function
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setAddingExpense(false);
    }

    function cancel() {
        setAddingExpense(false);
    }

    const startAddingExpenseHandler = () => {
        setAddingExpense(true);
    }

    return <div className="new-expense">
        {!addingExpense && <button onClick={startAddingExpenseHandler}>Add New Expense</button>}
        {addingExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancel} />}
    </div>;
}

export default NewExpense;
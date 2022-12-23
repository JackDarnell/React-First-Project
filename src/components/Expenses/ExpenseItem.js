import React, { useState } from 'react'; //changes to state values reflect in UI, state is seperated on a per component basis

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

//a component is just a function
//we can use the function to return some jsx code

//props stands for properties
function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title); //title is pointer to props title, setTitle is function to update title 

    function clickHandler() { //good to end functions with handler that are used as event handlers
        setTitle('Updated!'); //component re-renders when state changes
    }
    
    return <Card className='expense-item'>
        <div className='expense-item__description'>
            <ExpenseDate date={props.date}/>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button> {/* pointer to click handler, no parenthesis otherwise it would execute when it is evaluated */}
    </Card>
}

export default ExpenseItem;

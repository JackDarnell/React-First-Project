import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

//a component is just a function
//we can use the function to return some jsx code

//props stands for properties
function ExpenseItem(props) {
    
    return <Card className='expense-item'>
        <div className='expense-item__description'>
            <ExpenseDate date={props.date}/>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
    </Card>
}

export default ExpenseItem;

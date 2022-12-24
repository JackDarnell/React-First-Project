import React, { useState } from 'react'; //changes to state values reflect in UI, state is seperated on a per component basis

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

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

import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';

//a component is just a function
//we can use the function to return some jsx code


//props stands for properties
function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2022');

    function expenseFilterDataHandler(expenseFilterData) {
        console.log(expenseFilterData);
        setFilteredYear(expenseFilterData);
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter selectedYear={filteredYear} onYearChange={expenseFilterDataHandler}></ExpensesFilter>
            <ExpenseItem title = {props.expenses[0].title} amount = {props.expenses[0].amount} date = {props.expenses[0].date}></ExpenseItem>
            <ExpenseItem title = {props.expenses[1].title} amount = {props.expenses[1].amount} date = {props.expenses[1].date}></ExpenseItem>
            <ExpenseItem title = {props.expenses[2].title} amount = {props.expenses[2].amount} date = {props.expenses[2].date}></ExpenseItem>
            <ExpenseItem title = {props.expenses[3].title} amount = {props.expenses[3].amount} date = {props.expenses[3].date}></ExpenseItem>
        </Card>
    )
}

//testing 
export default Expenses;

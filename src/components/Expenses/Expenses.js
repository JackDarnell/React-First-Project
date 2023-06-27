import React, {useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';

//a component is just a function
//we can use the function to return some jsx code


//props stands for properties
function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    function expenseFilterDataHandler(expenseFilterYear) {
        setFilteredYear(expenseFilterYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

   
    return (
        <Card className='expenses'>
            <ExpensesFilter selectedYear={filteredYear} onYearChange={expenseFilterDataHandler}></ExpensesFilter>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    )
}

export default Expenses;

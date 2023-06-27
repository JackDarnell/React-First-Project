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
            {props.expenses.map((expense) => ( //key is needed, every item must be a unique id, index could cause bugs not directly attatched to content of item. 
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
            ))}
        </Card>
    )
}

//testing 
export default Expenses;

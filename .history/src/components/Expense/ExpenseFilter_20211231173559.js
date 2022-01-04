import React, { useState } from 'react';
import './expenseFilter.css';

const ExpenseFilter = (props) => {

    const [selectedyear, setSelectedyear] = useState('2021');

    const filterHandler = (event) => {
        console.log('year selected = ', event.target.value);
        props.onExpenseFiltered(event.target.value);
        setSelectedyear(event.target.value);
    }

    return (
        <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>Filter by year</label>
          <select onChange={filterHandler} selected={selectedyear}>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
          </select>
        </div>
      </div>
      );
}
export default ExpenseFilter;
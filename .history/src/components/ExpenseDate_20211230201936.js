import React from 'react';

function ExpenseDate() {
    return
        (<span>
        <div>{expenseDate}</div><div>{'-'+expenseMonth}</div><div>{'-'+expenseYear}</div>
        <div>{' , '+expenseDay}</div>
        </span>);
}

export default ExpenseDate;
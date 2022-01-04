import React from 'react';

function ExpenseDate(props) {
    return
        (<span>
        <div>{props.eDate}</div><div>{'-'+expenseMonth}</div><div>{'-'+expenseYear}</div>
        <div>{' , '+expenseDay}</div>
        </span>);
}

export default ExpenseDate;
import React from 'react';

function ExpenseDate(props) {
    return (<span>
        <div>{props.eDate}</div><div>{'-'+props.eMonth}</div><div>{'-'+props.eYear}</div>
        <div>{' , '+props.eDay}</div></span>
        );
}

export default ExpenseDate;
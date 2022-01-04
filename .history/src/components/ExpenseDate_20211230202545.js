import React from 'react';

function ExpenseDate(props) {
    return (<div>
        <div>{props.eDate}</div><div>{props.eMonth}</div><div>{props.eYear}</div>
        <div>{props.eDay}</div></div>
        );
}

export default ExpenseDate;
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [{
      id: 'e1',
      title: 'Test',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [addedExpenses, setAddedExpenses] = useState(expenses);

  const addNewExpenseHandler = (expenseData) => {
    console.log('added expense in app.js= ', expenseData);
    setAddedExpenses((prevState)=>{
      return [...prevState, expenseData];
    });
  }

  return (
    <div>
    <h2> Let 's get started!!!!! YES</h2>
    <NewExpense onNewExpenseAdd={addNewExpenseHandler}/>
    <Expenses expenseSet={addedExpenses}/>
    </div>
  );
}

export default App;
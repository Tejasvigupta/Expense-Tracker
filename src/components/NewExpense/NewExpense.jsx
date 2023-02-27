import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { useState } from 'react';

function NewExpense(props)
{
const saveExpenseDataHandler = (enteredExpenseData)=>{
    const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(0)
};

  const [isEditing, setIsEditing] = useState(0);

  const startEditingHandler = () => {
    setIsEditing(1);
  };

  const stopEditingHandler = () => {
      setIsEditing(0);
    };

    return (
      <div className="new-expense">
        {isEditing ? (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEditingHandler}
          />
        ) : (
          <button onClick={startEditingHandler}>Add new expense</button>
        )}
      </div>
    );
}

export default NewExpense;
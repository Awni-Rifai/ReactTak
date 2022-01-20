import React from "react"
import './ExpensesList.css'
import ExpenseItem  from "../ExpenseItem";


const ExpensesList=(props)=>{


    let filteredExpenses=props.filteredExpenses;
    if(filteredExpenses.length===0){
        return <p className="expense_item_message">There is no item here</p>;
        

    }
    
    if(filteredExpenses.length>0){


        return(
            <ul>
               {props.filteredExpenses.map((expense) => 
           (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          )
        )}
            </ul>
            
            
        )
      
    }


    
}
export default ExpensesList;
import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Transaction } from '../Transaction';

export const TransactionList = () => {
   const {transactions} = useContext(GlobalContext);
   return (
      <>
         <h3>History</h3>
         <ul className="list">
            {transactions.map(itm => (
               <Transaction key={itm.id} transaction={itm} />
            ))}
         </ul>
      </>
   )
}

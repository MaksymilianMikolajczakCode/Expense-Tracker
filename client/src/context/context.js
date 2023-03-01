import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('contracts')) || [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [contracts, dispatch] = useReducer(contextReducer, initialState);

  const deleteContract = (id) => dispatch({type: 'DELETE_CONTRACT', payload: id})
  const addContract = (contract) => dispatch({type: 'ADD_CONTRACT', payload: contract})

  const balance = contracts.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);
  return (
    <ExpenseTrackerContext.Provider value={{deleteContract, addContract, contracts, balance}}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

export default Provider
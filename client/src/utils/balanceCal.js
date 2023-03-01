import { useContext } from 'react';
import { ExpenseTrackerContext } from '../context/context';

import { incomeCategories, expenseCategories, resetCategories } from '../categories/categories';

const useContracts = (title) => {
  resetCategories();
  const { contracts } = useContext(ExpenseTrackerContext);
  const typeContracts = contracts.filter((c) => c.type === title);
  const total = typeContracts.reduce((acc, currVal) => acc += currVal.amount, 0);
  const categories = title === 'Income' ? incomeCategories : expenseCategories;

  typeContracts.forEach((con) => {
    const category = categories.find((c) => c.type === con.category);

    if (category) category.amount += con.amount;
  });

  const currentCategories = categories.filter((c) => c.amount > 0);

  const chartData = {
    datasets: [{
      data: currentCategories.map((c) => c.amount),
      backgroundColor: currentCategories.map((c) => c.color),
    }],
    labels: currentCategories.map((c) => c.type),
  };

  return { currentCategories, total, chartData };
};

export default useContracts;

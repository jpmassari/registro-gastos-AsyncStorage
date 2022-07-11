import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'spendings';

const store = async (data) => await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
//Tentar diminuir a quantidades de IF's
export const storeSpendings = async (spend) => {
  const monthYear = spend.date.formated;
  const spendings = await AsyncStorage.getItem(STORAGE_KEY);
  if(spendings === null) {
    const monthSpend = {
      [monthYear]: [
        spend
      ]
    }
    store(monthSpend)
    return;
  }
  const parsedSpendings = JSON.parse(spendings);
  const hasSpendingsForMonthYear = parsedSpendings[monthYear];

  if(!hasSpendingsForMonthYear) {
    const monthSpend = {
      ...parsedSpendings,
      [monthYear]: [
        spend
      ]
    }
    store(monthSpend);
    return;
  }
  const newSpendings = {
    ...parsedSpendings,
    [monthYear]: [
      ...parsedSpendings[monthYear],
      spend,
    ],
  };
  store(newSpendings);
}

export const getMonthlySpendings = async ( date, category ) => {
  const spendings = await AsyncStorage.getItem(STORAGE_KEY);
  if(!spendings) {
    return 0;
  }
  const parsedSpendings = JSON.parse(spendings);
  const spendsForMonth = parsedSpendings[date];
/*   const categoryFiltered = spendsForMonth.filter(e => e.category.id === category);
  categoryFiltered.forEach(e => sum += parseFloat(e.value)); */
  const totalSpent = spendsForMonth.reduce((acc, e, i) => {
    console.log("-----------");
    console.log(acc); 
    if(acc[key] === category) {
      acc[key].push(e.value)
    }
    console.log(acc);
    return acc;
  });
  console.log("totalSpent: ", totalSpent);
  return totalSpent;
}

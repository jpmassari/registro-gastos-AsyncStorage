import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeSpendings = async (spend) => {
  const monthYear = spend.date.formated;
  const spendings = await AsyncStorage.getItem('spendings');
  if(spendings === null) {
    const monthSpend = {
      [monthYear]: [
        spend
      ]
    }
    const stringifiedSpend = JSON.stringify(monthSpend);
    await AsyncStorage.setItem('spendings', stringifiedSpend);
    return;
  }

  const parsedSpendings = JSON.parse(spendings);

  if(!parsedSpendings[monthYear]) {
    const monthSpend = {
      ...parsedSpendings,
      [monthYear]: [
        spend
      ]
    }
    const stringifiedSpend = JSON.stringify(monthSpend);
    await AsyncStorage.setItem('spendings', stringifiedSpend);
    return;
  }
  const newSpendings = {
    ...parsedSpendings,
    [monthYear]: [
      ...parsedSpendings[monthYear],
      spend,
    ],
  };
  await AsyncStorage.setItem('spendings', JSON.stringify(newSpendings));
}

export const getMonthlySpendings = async ( date, category ) => {
  const spendings = await AsyncStorage.getItem('spendings');
  let sum = 0;
  if(!spendings) {
    return sum;
  }
  const parsedSpendings = JSON.parse(spendings);
  const spendsForMonth = parsedSpendings[date];
  const categoryFiltered = spendsForMonth.filter(e => e.category.id === category);
  categoryFiltered.forEach(e => sum += parseFloat(e.value));
  return sum;
}

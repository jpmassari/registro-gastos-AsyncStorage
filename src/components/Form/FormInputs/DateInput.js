import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons'; 
import { Calendar } from 'react-native-calendars';

import { CalendarLocale } from '../../../config-components/Calendar/CalendarLocale';

const InputContent = styled.View`
  margin-bottom: 20px;
`;
const Label = styled.Text`
color: #000;
font-family: 'Inter_700Bold';
font-size: 14px;
margin-bottom: 10px;
`;
const InputButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  background-color: #F0EDEB;
  border-radius: 5px;
  padding: 10px 10px 10px 15px;
`;

const InputButtonText = styled.Text`
  font-family: 'Inter_400Regular';
  font-size: 14px;
  margin-right: auto;
`;

export const DateInput = () => {   

  useEffect(() => {
    CalendarLocale()
  },[])
  
  const dateFormat = {
    date: {
      day: 'numeric',
      month: 'short',
      year: 'numeric', 
      timeZone:'GMT'
    },
    time: {
      hour:'2-digit',
      minute:'2-digit'
    }
  }
  const [ calendar, setCalendar ] = useState({
    display: false,
    calendarDate: new Date,
    time: new Date, //A library do calendario não fornece nenhuma propriedade para customizar a timezone do UTC...
  });
  const [ selectedDate, setSelectedDate ] = useState({
    selectedDate:{}
  })

  const selectDate = (day) => {
    let selectedDate = {};
    selectedDate[day.dateString] = {customStyles : {container:{backgroundColor: '#f8aa4d', elevation: 2}, text:{color:'#fff'}}}
    setSelectedDate({...selectedDate, selectedDate: selectedDate})
  }  
  return (
    <InputContent>
      <Label>Data/hora</Label>
        <InputButton
          onPress={() => setCalendar({ ...calendar, display: !calendar.display})}
        >
          <InputButtonText>{calendar.calendarDate.toLocaleDateString('en-gb', dateFormat.date)}, {calendar.time.toLocaleString("en-gb", dateFormat.time)}</InputButtonText>
          {calendar.display? <Entypo name="chevron-up" size={24} color="black" /> : <Entypo name="chevron-down" size={24} color="black" />}
        </InputButton>
      {
       calendar.display &&
        <Calendar
          enableSwipeMonths={true}
          onDayPress={day => {setCalendar({ ...calendar, calendarDate: new Date(day.dateString), time: new Date, dateString: day.dateString, }); selectDate(day)}}
          markingType={'custom'}
          markedDates={selectedDate.selectedDate}
        />
      }
    </InputContent>
  )
}
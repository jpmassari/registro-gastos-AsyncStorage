import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons'; 
import { Calendar } from 'react-native-calendars';

import { CalendarLocale } from '../../../helpers/Calendar/CalendarLocale';

const Wrapper = styled.View`
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
const ScreenPressable = styled.Pressable`
  background-color: black;
  position: absolute;
  opacity: ${props => props.isCalendarShown ? .6 : 0};
  top: -200px;
  bottom: -100px;
  margin: auto;
  left: -20px;
  right: -20px;
`;
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

export const DateInput = ({
  calendarShown = () => null
}) => {   

  useEffect(() => {
    CalendarLocale()
  },[])

  const [ calendar, setCalendar ] = useState({
    display: false,
    date: new Date(),
    time: new Date(),
  });
  const [ calendarDateToggle, setCalendarDateToggle ] = useState({
    highlightedDay:{}
  })

  const selectDate = (dateString) => {
    let selectedDay = {};
    selectedDay[dateString] = {customStyles : {container:{backgroundColor: '#f8aa4d', elevation: 2}, text:{color:'#fff'}}}
    setCalendarDateToggle({ ...calendarDateToggle, highlightedDay: selectedDay })
  }  
  return (
    <>
    <ScreenPressable 
      onPress={() => { setCalendar({ ...calendar, display: false}); calendarShown(false) }}
      isCalendarShown={calendar.display}
      disabled={!calendar.display}
      />
    <Wrapper>
      <Label>Data/hora</Label>
        <InputButton
          onPress={() => { setCalendar({ ...calendar, display: !calendar.display }); calendarShown() }}
        >
          <InputButtonText>{calendar.date.toLocaleDateString('en-gb', dateFormat.date)}, {calendar.time.toLocaleString("en-gb", dateFormat.time)}</InputButtonText>
          {calendar.display? <Entypo name="chevron-up" size={24} color="black" /> : <Entypo name="chevron-down" size={24} color="black" />}
        </InputButton>
      {
       calendar.display &&
        <Calendar
          enableSwipeMonths={true}
          onDayPress={day => {setCalendar({ ...calendar, date: new Date(day.dateString), time: new Date()}); selectDate(day.dateString)}}
          markingType={'custom'}
          markedDates={calendarDateToggle.highlightedDay}
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 30,
            borderRadius: 5,
            height: 365,
            overflow: 'hidden',
          }}
          theme={{
            calendarBackground: '#F0EDEB'
          }}
        />
      }
    </Wrapper>
    </>
  )
}

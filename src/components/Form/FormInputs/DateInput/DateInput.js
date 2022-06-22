import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons'; 
import { Calendar } from 'react-native-calendars';

import { setupLocale } from '../../../../config/Calendar/setup-locale';

const Wrapper = styled.View`
  margin-bottom: 20px;
  z-index:  ${props => props.isCalendarShown ? 2 : 0};
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
  z-index:  ${props => props.isCalendarShown ? 2 : 0};
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
const toDate = (calendar) => calendar.calendarDate.toLocaleDateString('en-gb', dateFormat.date);

const toTime = (calendar) => calendar.time.toLocaleString("en-gb", dateFormat.time);

export const DateInput = () => {   
  const [ calendar, setCalendar ] = useState({
    display: false,
    calendarDate: new Date(),
    time: new Date(),
  });
  const [ selectedDate, setSelectedDate ] = useState({})

  const selectDate = (day) => {
    setSelectedDate({ 
      [day.dateString]: {
        customStyles : {
          container: {
            backgroundColor: '#f8aa4d',
            elevation: 2
          },
          text:{color:'#fff'}
        }
      },
    });
  };

  useEffect(() => setupLocale(), []);

  return (
    <>
    <ScreenPressable 
      onPress={() => setCalendar({ ...calendar, display: false})}
      isCalendarShown={calendar.display}
      disabled={!calendar.display}
      />
    <Wrapper isCalendarShown={calendar.display} >
      <Label>Data / hora</Label>
        <InputButton
          onPress={() => setCalendar({ ...calendar, display: !calendar.display })}
        >
          <InputButtonText>
            {toDate(calendar)}, {toTime(calendar)}
          </InputButtonText>
          <Entypo name={calendar.display ? 'chevron-up' : 'chevron-down'} size={24} color="black" />
        </InputButton>
      {
       calendar.display &&
        <Calendar
          enableSwipeMonths={true}
          onDayPress={day => {
            setCalendar({ ...calendar,
              calendarDate: new Date(day.dateString),
              time: new Date(),
              display: false
            });
            selectDate(day);
          }}
          markingType={'custom'}
          markedDates={selectedDate}
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

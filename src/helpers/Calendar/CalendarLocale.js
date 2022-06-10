import { LocaleConfig } from 'react-native-calendars';

export const CalendarLocale = () => {
  LocaleConfig.locales['pt-BR'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    monthNamesShort: ['JAN', 'FEV', 'MAR', 'ABR', 'MAIO', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
    dayNames: ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'],
    dayNamesShort: ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB.', 'DOM'],
    today: "HOJE"
  };
  LocaleConfig.defaultLocale = 'pt-BR';
}


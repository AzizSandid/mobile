import { useState } from 'react';

export const useCalendar = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const handleDatePress = (date: Date) => {
    setSelectedDate(date);
  };

  const handlePreviousMonth = () => {
    const previousMonth = new Date(currentYear, currentMonth - 1, 1);
    setCurrentMonth(previousMonth.getMonth());
    setCurrentYear(previousMonth.getFullYear());
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentYear, currentMonth + 1, 1);
    setCurrentMonth(nextMonth.getMonth());
    setCurrentYear(nextMonth.getFullYear());
  };

  return {
    selectedDate,
    currentMonth,
    currentYear,
    handleDatePress,
    handlePreviousMonth,
    handleNextMonth,
  };
};

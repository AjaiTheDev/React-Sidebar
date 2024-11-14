import { useCallback, useState } from "react";
import CalenderHeader from "./calender-header";
import { addMonths, subMonths } from "date-fns";
import CalenderDays from "./calender-days";
import CalenderDates from "./calender-dates";

export const Calender = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  
  const onDateClick = useCallback((newDate: Date) => {
    console.log(newDate, "clicked cell value");
    setSelectedDate(newDate);
  }, []);

  const nextMonth = useCallback(() => {
    setCurrentMonth((prev) => addMonths(prev, 1));
  }, []);

  const prevMonth = useCallback(() => {
    setCurrentMonth((prev) => subMonths(prev, 1));
  }, []);

  return (
    <div className="flex flex-col bg-slate-100 p-2 overflow-x-auto">
      <CalenderHeader
        currentMonth={currentMonth}
        handleNextMonthClick={nextMonth}
        handlePrevMonthClick={prevMonth}
      />
      <CalenderDays currentMonth={currentMonth} />
      <CalenderDates
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        onCellClick={onDateClick}
      />
    </div>
  );
};

export default Calender;

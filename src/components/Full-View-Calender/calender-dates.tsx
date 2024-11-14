import React, { useCallback } from "react";
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
  isSameDay,
  format,
} from "date-fns";

export interface ICalenderDatesProps {
  currentMonth: Date;
  selectedDate: Date;
  onCellClick: (val: Date) => void;
}

export const CalenderDates: React.FC<ICalenderDatesProps> = ({
  currentMonth,
  selectedDate,
  onCellClick,
}) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  /**
   * Function which determines if the provided day is saturday or sunday.
   */
  const weekendDisable = useCallback((dayIndex: number): boolean => {
    return [0].includes(dayIndex % 7);
  }, []);

  /**
   * Function determines if the provided day is outside the current month.
   * 
   * @param {Date} [day]
   * @returns {boolean} return 'true' if the day is outside the month or else false.
   */
  const isDayOutsideCurrentMonth = useCallback((day: Date): boolean => {
    return day < monthStart || day > monthEnd;
  }, [currentMonth]);

  const rows = [];
  for (let i = 0; i < days.length; i += 7) {
    rows.push(days.slice(i, i + 7)); // Take a slice of 7 days at a time
  }

  /**
   *  Calls the 'onCellClick' callback function and modify the value of 'selectedDate' - state variable.
   */
  const handleCellClick = useCallback((day: Date) => {
    onCellClick(day);
  }, []);

  return rows?.map((week, weekIndex) => (
    <div
      className="w-full flex flex-row justify-between"
      key={weekIndex?.toString()}
    >
      {week?.map((day, dayIndex) => (
        <button
          className={`calender-cell-button ${
            isSameDay(selectedDate, day) && "calender-selected-cell"
          }`}
          key={dayIndex?.toString()}
          disabled={isDayOutsideCurrentMonth(day) || weekendDisable(dayIndex)}
          onClick={() => handleCellClick(day)}
        >
          {isDayOutsideCurrentMonth(day) ? "" : format(day, "d")}
        </button>
      ))}
    </div>
  ));
};

export default CalenderDates;

import { addDays, format, startOfWeek } from "date-fns";
import React from "react";
import { dayFormatMd, dayFormatSm } from "../../constant";
import useWindowWidth from "../../utils/custom-hooks/use-window-width";

export interface ICalenderDaysProps {
  currentMonth: Date;
}

function setHolidayColor(index: number): string {
  const color =
    index === 0 || index === 6 ? "text-red-600" : "text-neutral-950";

  return color;
}

export const CalenderDays: React.FC<ICalenderDaysProps> = React.memo(
  ({ currentMonth }) => {
    const { isMediumDevice } = useWindowWidth();
    const startDate = startOfWeek(currentMonth);
    const dayFormat = !isMediumDevice ?  dayFormatMd : dayFormatSm;

    return (
      <div className="w-full flex justify-between items-center px-1 py-3 border-b-2">
        {[...Array(7)].map((_, i) => (
          <span
            className={`w-full flex justify-center text-sm font-semibold 
              ${setHolidayColor(i)} md:text-base`
            }
            key={i}
          >
            {format(addDays(startDate, i), dayFormat)}
          </span>
        ))}
      </div>
    );
  }
);

export default CalenderDays;

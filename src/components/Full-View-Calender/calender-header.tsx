import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { monthYearFormat } from "../../constant";
import { format } from "date-fns";

export interface ICalenderHeaderProps {
  currentMonth: Date;
  handleNextMonthClick: () => void;
  handlePrevMonthClick: () => void;
}

export const CalenderHeader: React.FC<ICalenderHeaderProps> = ({
  currentMonth,
  handleNextMonthClick,
  handlePrevMonthClick,
}) => {
  const formattedMonth = format(currentMonth, monthYearFormat);

  return (
    <div className="w-full flex flex-row items-center justify-between border-b-2 py-2">
      <button
        className="text-[20px] md:text-[40px] "
        onClick={handlePrevMonthClick}
      >
        <FiChevronLeft />
      </button>
      <div className="text-[20px] font-thin md:text-[30px]">
        <span className="font-bold ">{formattedMonth}</span>
      </div>
      <button
        className="text-[20px] md:text-[40px] "
        onClick={handleNextMonthClick}
      >
        <FiChevronRight />
      </button>
    </div>
  );
};

export default CalenderHeader;

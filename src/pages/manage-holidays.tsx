import Holidays, { HolidaysTypes} from "date-holidays";
import React, { useCallback, useMemo, useState } from "react";

export interface OptionsProps {
  id: string;
  label: string;
}

export const ManageHolidays: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const currentYear = new Date().getFullYear();
  const hd = new Holidays()

  const options: HolidaysTypes.Holiday[] = useMemo(() => {
    console.log('use memo test')
    hd.init('Us');
    const holidays = hd.getHolidays();
    return holidays;
  },[currentYear]);

  const handleCheckBoxClick = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const itemId = event.target.id;
      setSelectedOptions((prev: string[]) => {
        return prev.includes(itemId)
          ? prev.filter((id) => id !== itemId)
          : [...prev, itemId];
      });
    },
    []
  );

  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="text-lg md:text-xl lg:text-3xl font-bold leading-none tracking-tight">
        Mange Holidays
      </h1>
      <div className="flex flex-col px-2">
        {options?.map((item: HolidaysTypes.Holiday) => (
          <div key={item.name} className="flex flex-row gap-x-3 items-center">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-gray-300 text-blue-600  focus:ring-blue-500"
              name={item?.name}
              id={item.name}
              checked={selectedOptions?.includes(item?.name)}
              value={item?.name}
              onChange={handleCheckBoxClick}
            />
            <label
              htmlFor={item.name}
              className="text-[20px] text-gray-700 cursor-pointer"
            >
              {item?.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageHolidays;

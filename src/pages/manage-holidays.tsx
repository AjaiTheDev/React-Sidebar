import React, { useCallback, useState } from "react";

export interface OptionsProps {
  id: string;
  label: string;
}

const options: OptionsProps[] = [
  { id: "option1", label: "Option 1" },
  { id: "option2", label: "Option 2" },
  { id: "option3", label: "Option 3" },
  { id: "option4", label: "Option 4" },
];

export const ManageHolidays: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

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
        {options?.map((item: OptionsProps) => (
          <div key={item.id} className="flex flex-row gap-x-3 items-center">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-gray-300 text-blue-600  focus:ring-blue-500"
              name={item?.label}
              id={item.id}
              checked={selectedOptions?.includes(item?.id)}
              value={item?.id}
              onChange={handleCheckBoxClick}
            />
            <label
              htmlFor={item.label}
              className="text-[20px] text-gray-700 cursor-pointer"
            >
              {item?.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageHolidays;

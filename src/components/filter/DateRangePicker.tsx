import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateRangePickerProps } from "../../types";

export default function DateRangePicker({
  onDateChange,
}: DateRangePickerProps) {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;

  return (
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update: [Date | null, Date | null]) => {
        setDateRange(update);
        onDateChange(update[0], update[1]);
      }}
      isClearable={true}
      placeholderText="Select date range"
      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 
          focus:ring-primary-500 focus:border-transparent"
      maxDate={new Date()}
    />
  );
}

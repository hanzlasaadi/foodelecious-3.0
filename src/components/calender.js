import React, { useState, useCallback } from 'react';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const DateRangePicker = () => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);

  const [showPicker, setShowPicker] = useState(false);

  const handleSelect = useCallback((ranges) => {
    setDateRange([ranges.selection]);
  }, []);

  const handleButtonClick = () => {
    setShowPicker(!showPicker);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Toggle Date Picker</button>
      {showPicker && (
        <div>
          <Calendar
            ranges={dateRange}
            onChange={handleSelect}
            dateDisplayFormat="MM/dd/yyyy"
          />
          
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;

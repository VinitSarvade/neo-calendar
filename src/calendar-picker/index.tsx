import { useState } from "react";
import "./calendar.scss";

import {
  MONTHS,
} from "./utils";
import { MonthSwitcher } from "./header/month-switcher";
import Week from "./header/week";
import CalendarBody from "./body";

interface CalendarProps {
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
  disableFutureDates?: boolean;
  disablePastDates?: boolean;
}

export default function Calendar(props: CalendarProps) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const changeMonth = (change: number) => () => {
    const updatedDate = new Date(currentYear, currentMonth + change, 1);
    setCurrentMonth(updatedDate.getMonth());
    setCurrentYear(updatedDate.getFullYear());
  };

  return (
    <div className="calendar">
      <div className="calendar__header">
        <MonthSwitcher title={`${MONTHS[currentMonth]} ${currentYear}`} onChangeMonth={changeMonth} />

        <Week />
      </div>

      <CalendarBody currentMonth={currentMonth} currentYear={currentYear} {...props} />
    </div>
  );
}

import { getNextMonthDates, getPrevMonthDates } from "../utils";
import Month from "./current-month";
import InactiveDays from "./inactive-days";

interface CalendarBodyProps {
  currentMonth: number;
  currentYear: number;
  disableFutureDates?: boolean;
  disablePastDates?: boolean;

  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
}

export default function CalendarBody(props: CalendarBodyProps) {
  const { currentMonth, currentYear, onDateSelect } = props;

  const onDateChange = (date: number) => () => {
    onDateSelect?.(new Date(currentYear, currentMonth, date));
  }

  return (
    <div className="calendar__body">
      <InactiveDays inactiveDays={getPrevMonthDates(currentMonth, currentYear)} />

      <Month {...props} onDateSelect={onDateChange} />

      <InactiveDays inactiveDays={getNextMonthDates(currentMonth, currentYear)} />
    </div>
  )
}

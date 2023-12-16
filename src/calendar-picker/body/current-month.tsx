import { getDates } from "../utils";

interface MonthProps {
  currentMonth: number;
  currentYear: number;
  disableFutureDates?: boolean;
  disablePastDates?: boolean;

  selectedDate?: Date;
  onDateSelect?: (date: number) => () => void;
}

export default function Month({ currentMonth, currentYear, selectedDate, onDateSelect, disableFutureDates, disablePastDates }: MonthProps) {
  const today = new Date();

  const isToday = (date: number) =>
    date === today.getDate() &&
    today.getMonth() === currentMonth &&
    today.getFullYear() === currentYear;

  const isSelectedDate = (date: number) =>
    selectedDate?.getDate() === date &&
    selectedDate?.getMonth() === currentMonth &&
    selectedDate?.getFullYear() === currentYear;

  const isFutureDate = (date: number) =>
    (date > today.getDate() && currentMonth === today.getMonth()) ||
    (currentMonth > today.getMonth() && currentYear === today.getFullYear()) ||
    currentYear > today.getFullYear();

  const isPastDate = (date: number) =>
    (date < today.getDate() && currentMonth === today.getMonth()) ||
    (currentMonth < today.getMonth() && currentYear === today.getFullYear()) ||
    currentYear < today.getFullYear();

  return getDates(currentMonth, currentYear).map((date) => (
    <div
      className={`calendar__body-day
            ${isSelectedDate(date) ? "selected" : ""}
            ${(disableFutureDates && isFutureDate(date)) ||
          (disablePastDates && isPastDate(date))
          ? "disabled"
          : ""
        }
            ${isToday(date) ? "today" : ""}
        `}
      key={`curr-${date}`}
      onClick={onDateSelect?.(date)}
    >
      {date.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false
      })}
    </div>
  ));
}


import { DAYS } from "../utils";

export default function Week() {
  return (
    <div className="calendar__header-week">
      {DAYS.map((day) => (
        <div className="calendar__header-week-day" key={`week-${day}`}>
          {day.substring(0, 3)}
        </div>
      ))}
    </div>
  );
}

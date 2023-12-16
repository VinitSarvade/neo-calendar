export default function InactiveDays({inactiveDays}: {inactiveDays: number[]}) {
  return inactiveDays.map((date) => (
    <div className="calendar__body-day prev-month" key={`prev-${date}`}>
      {date}
    </div>
  ));
}

interface HeaderMonthSwitcherProps {
  title: string;
  onChangeMonth: (change: number) => () => void;
}

export function MonthSwitcher({ title, onChangeMonth}: HeaderMonthSwitcherProps) {
  return (
    <div className="calendar__header-month_switcher">
      <div className="arrow__previous-month" onClick={onChangeMonth(-1)}>
        &#8592;
      </div>
      <h3>{title}</h3>
      <div className="arrow__next-month" onClick={onChangeMonth(1)}>
        &#8594;
      </div>
    </div>
  )
}

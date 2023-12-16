import { useState } from 'react';
import Calendar from './calendar-picker'

function App() {
  const [selectedDate, setSelectedDate] = useState<Date>();

  return (
    <div className="App">
      <h1>Neo Calendar</h1>
      <Calendar selectedDate={selectedDate} onDateSelect={setSelectedDate} />
      <div>{selectedDate?.toDateString()}</div>
    </div>
  );
}

export default App

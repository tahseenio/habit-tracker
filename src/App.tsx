import { useCallback, useEffect, useState } from 'react';
import './App.css';
import AddHabit from './components/AddHabit';
import Habits from './components/Habits';

function App() {
  const [isAddingHabit, setIsAddingHabit] = useState(false);

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    console.log('listening to App');
    if (e.key === 'h' && e.ctrlKey === true) {
      e.preventDefault();
      setIsAddingHabit(true);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className='App'>
      {isAddingHabit ? <AddHabit setIsAddingHabit={setIsAddingHabit} /> : null}
      <h1>Habit Tracker</h1>
      <button onClick={() => setIsAddingHabit(true)}>New Habit</button>
      <Habits />
    </div>
  );
}

export default App;

import { nanoid } from 'nanoid';
import { useCallback, useEffect, useState } from 'react';
import { useHabitContext } from '../context/HabitContextProvider';

interface Props {
  setIsAddingHabit: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddHabit = ({ setIsAddingHabit }: Props) => {
  const [newHabit, setNewHabit] = useState('');

  const { habits, setHabits } = useHabitContext();

  const handleAddHabit = () => {
    if (newHabit.length === 0) return;
    const newHabits = [...habits, { name: newHabit, id: nanoid() }];
    setHabits(newHabits);
    setIsAddingHabit(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log('handing at addhabit');
    if (e.key === 'Enter') {
      handleAddHabit();
    }
  };

  const handleGlobalKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsAddingHabit(false);
      }
    },
    [setIsAddingHabit]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleGlobalKeyPress);

    return () => {
      document.removeEventListener('keydown', handleGlobalKeyPress);
    };
  }, [handleGlobalKeyPress]);

  return (
    <div className='add-habit__wrapper'>
      <button onClick={() => setIsAddingHabit(false)}>Close</button>
      <h1>Add a new habit</h1>
      <input
        autoFocus
        type='text'
        onChange={(e) => {
          setNewHabit(e.target.value);
        }}
        onKeyUp={handleKeyPress}
      />
      <button onClick={handleAddHabit}>Add Habit</button>
    </div>
  );
};

export default AddHabit;

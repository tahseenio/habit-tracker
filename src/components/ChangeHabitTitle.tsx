import { useState } from 'react';
import { useHabitContext } from '../context/HabitContextProvider';

interface Props {
  id: string;
  setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangeHabitTitle = ({ id, setIsUpdating }: Props) => {
  const [newTitle, setNewTitle] = useState('');

  const { habits, setHabits } = useHabitContext();

  const handleUpdateHabit = () => {
    if (newTitle.length === 0) return;

    const newHabits = habits.map((elem) => {
      if (elem.id === id) {
        return {
          ...elem,
          name: newTitle,
        };
      } else return elem;
    });
    setHabits(newHabits);
    setIsUpdating(false);
  };

  return (
    <div className='add-habit__wrapper'>
      <button onClick={() => setIsUpdating(false)}>Close</button>
      <h1>Change title to:</h1>
      <input
        autoFocus
        type='text'
        onChange={(e) => {
          setNewTitle(e.target.value);
        }}
      />
      <button onClick={handleUpdateHabit}>Change Title</button>
    </div>
  );
};

export default ChangeHabitTitle;

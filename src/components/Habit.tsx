import { useState } from 'react';
import { useHabitContext } from '../context/HabitContextProvider';
import ChangeHabitTitle from './ChangeHabitTitle';

interface Props {
  id: string;
  name: string;
}

const Habit = ({ id, name }: Props) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const { habits, setHabits } = useHabitContext();

  const handleDeleteHabit = () => {
    const newArray = habits.filter((item) => item.id !== id);
    setHabits(newArray);
  };

  return (
    <>
      {isUpdating ? (
        <ChangeHabitTitle id={id} setIsUpdating={setIsUpdating} />
      ) : null}
      <li>{name}</li>
      <button onClick={handleDeleteHabit}>Delete {name}</button>
      <button onClick={() => setIsUpdating(true)}>Update {name}</button>
    </>
  );
};

export default Habit;

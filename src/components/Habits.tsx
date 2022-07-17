import { useEffect } from 'react';
import { useHabitContext } from '../context/HabitContextProvider';
import Habit from './Habit';

const Habits = () => {
  const { habits } = useHabitContext();

  useEffect(() => {
    // console.log(habits);
  }, [habits]);
  return (
    <ul>
      {habits.map((elem) => (
        <Habit key={elem.id} id={elem.id} name={elem.name} />
      ))}
    </ul>
  );
};

export default Habits;

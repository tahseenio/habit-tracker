import { nanoid } from 'nanoid';
import { createContext, useContext, useState } from 'react';

interface HabitContextProps {
  habits: habitArrayProps[];
  setHabits: React.Dispatch<React.SetStateAction<habitArrayProps[]>>;
}

interface habitArrayProps {
  name: string;
  id: string;
}

const HabitContext = createContext<HabitContextProps | {}>({});

const HabitContextProvider = ({ children }: { children: JSX.Element }) => {
  const [habits, setHabits] = useState<habitArrayProps[]>([
    { name: 'Sleep', id: nanoid() },
    { name: 'Eat', id: nanoid() },
    { name: 'Brush Teeth', id: nanoid() },
  ]);

  return (
    <HabitContext.Provider value={{ habits, setHabits }}>
      {children}
    </HabitContext.Provider>
  );
};

export default HabitContextProvider;

export const useHabitContext = () =>
  useContext(HabitContext) as HabitContextProps;

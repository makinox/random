'use client';

import { useState, createContext, useContext, useEffect } from 'react';

import { deepCopy, getRandomValue } from '@/utils';

export type AppPerson = {
  name: string;
  email: string;
};

interface State {
  isRandomActive: boolean;
  people: Array<AppPerson>;
  selected: AppPerson | null;
  startRandom: () => void;
  addMany: (list: Array<AppPerson>) => void;
  addPerson: (person: AppPerson) => void;
  removePerson: (personEmail: string) => void;
  removeAll: () => void;
}

const PeopleContext = createContext<State | undefined>(undefined);

export function PeopleProvider({ children }: { children: JSX.Element }) {
  const [people, setPeople] = useState<Array<AppPerson>>([]);
  const [selected, setSelected] = useState<AppPerson | null>(null);
  const [isRandomActive, setIsRandomActive] = useState(false);

  // Set a random person
  useEffect(() => {
    if (!isRandomActive) return;
    const interval = setInterval(() => {
      const totalpeople = people.length - 1;
      const random = getRandomValue(totalpeople);
      setSelected(people[random]);
    }, 500);

    return () => clearInterval(interval);
  }, [isRandomActive, people]);

  // Run for ten seconds
  useEffect(() => {
    if (!isRandomActive) return;
    const timeout = setTimeout(() => {
      setIsRandomActive(false);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [isRandomActive]);

  const startRandom = () => setIsRandomActive(true);

  const addMany = (list: Array<AppPerson>) => {
    setPeople((prevStorage) => ({
      ...prevStorage,
      ...list,
    }));
  };

  const addPerson = (person: AppPerson) => {
    setPeople((prevStorage) => {
      const copiedOrders = deepCopy(prevStorage);
      copiedOrders.push(person);
      return copiedOrders;
    });
  };

  const removePerson = (personEmail: string) => {
    setPeople((prevStorage) => {
      const copiedOrders = deepCopy(prevStorage);
      const orderIndex = people.findIndex((element) => element.email === personEmail);
      copiedOrders.splice(orderIndex, 1);
      return copiedOrders;
    });
  };

  const removeAll = () => setPeople([]);

  return (
    <PeopleContext.Provider value={{ people, selected, isRandomActive, addPerson, startRandom, addMany, removePerson, removeAll }}>
      {children}
    </PeopleContext.Provider>
  );
}

export function usePeople() {
  const context = useContext(PeopleContext);
  if (context === undefined) throw new Error('usePeople must be used within a PeopleProvider');

  return context;
}

'use client';

import { useState, createContext, useContext } from 'react';

import { deepCopy } from '@/utils';

const TEST_PEOPLE = [
  { name: 'a', email: 'a' },
  { name: 'b', email: 'b' },
  { name: 'c', email: 'c' },
  { name: 'd', email: 'd' },
  { name: 'e', email: 'e' },
  { name: 'f', email: 'f' },
  { name: 'g', email: 'g' },
];

type AppPerson = {
  name: string;
  email: string;
};

interface State {
  people: Array<AppPerson>;
  addPerson: (person: AppPerson) => void;
  removePerson: (personName: string) => void;
  removeAll: () => void;
}

const PeopleContext = createContext<State | undefined>(undefined);

export function PeopleProvider({ children }: { children: JSX.Element }) {
  const [people, setPeople] = useState(TEST_PEOPLE);

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

  return <PeopleContext.Provider value={{ people, addPerson, removePerson, removeAll }}>{children}</PeopleContext.Provider>;
}

export function usePeople() {
  const context = useContext(PeopleContext);
  if (context === undefined) throw new Error('usePeople must be used within a PeopleProvider');

  return context;
}

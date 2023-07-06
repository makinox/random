'use client';

import { useState, createContext, useContext } from 'react';

import { deepCopy } from '@/utils';

const TEST_PEOPLE = [
  { name: 'Aberty', email: 'a' },
  { name: 'Jotamario', email: 'b' },
  { name: 'Camila', email: 'c' },
  { name: 'Diego', email: 'd' },
  { name: 'Efrain', email: 'e' },
  { name: 'Francisco', email: 'f' },
  { name: 'Gabriel', email: 'g' },
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

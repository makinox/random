'use client';

import { usePeople } from '@/contexts/People';

export const PeopleList = () => {
  const { people } = usePeople();

  return (
    <section>
      {people.map((person) => (
        <span key={person.email}>{person.email}</span>
      ))}
    </section>
  );
};

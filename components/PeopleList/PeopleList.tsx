'use client';

import { usePeople } from '@/contexts/People';

export const PeopleList = () => {
  const { people } = usePeople();

  return (
    <section className="gap-4 flex flex-wrap">
      {people.map((person) => (
        <span className="badge py-6 px-6 text-2xl" key={person.email}>
          {person.name}
        </span>
      ))}
    </section>
  );
};

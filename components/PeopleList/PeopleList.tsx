'use client';

import cn from 'classnames';

import { usePeople } from '@/contexts/People';

export const PeopleList = () => {
  const { people, selected } = usePeople();

  return (
    <section className="gap-4 flex flex-wrap">
      {people.map((person) => {
        const isSelected = person.email === selected?.email;
        const badgeClass = cn('badge py-6 px-6 text-2xl', {
          'badge-primary': isSelected,
        });

        return (
          <span className={badgeClass} key={person.email}>
            {person.name}
          </span>
        );
      })}
    </section>
  );
};

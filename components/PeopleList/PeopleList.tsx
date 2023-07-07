'use client';

import cn from 'classnames';

import { usePeople } from '@/contexts/People';

export const PeopleList = () => {
  const { people, selected } = usePeople();

  return (
    <section className="gap-4 flex flex-wrap">
      {people.length === 0 && (
        <article className="flex justify-center w-full my-8">
          <h2 className="text-2xl">Add some names to start</h2>
        </article>
      )}

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

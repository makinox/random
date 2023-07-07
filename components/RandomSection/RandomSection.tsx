'use client';

import { usePeople } from '@/contexts/People';
import Link from 'next/link';

export const RandomSection = () => {
  const { people, selected, startRandom, isRandomActive } = usePeople();

  const isGameOver = !isRandomActive && selected?.name;

  const handleClick = () => {
    startRandom();
  };

  if (people.length === 0)
    return (
      <section className="flex justify-center">
        <Link href="/edit" className="btn btn-neutral">
          Add names
        </Link>
      </section>
    );

  return (
    <section>
      <div className="flex justify-center">
        <button onClick={handleClick} className="btn btn-neutral my-24" disabled={isRandomActive}>
          {isRandomActive ? 'Loading ...' : 'Lets random'}
        </button>
      </div>

      {isGameOver && (
        <article className="flex justify-center">
          <h2 className="text-4xl">Hey {selected?.name} win 🥳</h2>
        </article>
      )}
    </section>
  );
};

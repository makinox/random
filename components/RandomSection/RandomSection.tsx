'use client';

import { usePeople } from '@/contexts/People';

export const RandomSection = () => {
  const { selected, startRandom, isRandomActive } = usePeople();

  const isGameOver = !isRandomActive && selected?.name;

  const handleClick = () => {
    startRandom();
  };

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

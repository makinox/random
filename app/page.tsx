import Link from 'next/link';

import { NavBar, PeopleList, RandomSection } from '@/components';

const Home = () => {
  return (
    <main className="container min-h-screen mx-auto bg-base-100">
      <NavBar />
      <section className="flex justify-end my-4">
        <Link href="/edit" className="btn btn-success btn-xs">
          Edit
        </Link>
      </section>
      <PeopleList />
      <RandomSection />
    </main>
  );
};

export default Home;

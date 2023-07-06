import { NavBar, PeopleList } from '@/components';

export default function Home() {
  return (
    <main className="container min-h-screen mx-auto">
      <NavBar />
      <PeopleList />

      <section>
        <button>Lets random</button>
      </section>
    </main>
  );
}

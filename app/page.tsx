import { NavBar, PeopleList, RandomSection } from '@/components';

export default function Home() {
  return (
    <main className="container min-h-screen mx-auto bg-base-100">
      <NavBar />
      <PeopleList />
      <RandomSection />
    </main>
  );
}

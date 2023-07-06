import { NavBar, PeopleList, RandomSection } from '@/components';

const Home = () => {
  return (
    <main className="container min-h-screen mx-auto bg-base-100">
      <NavBar />
      <PeopleList />
      <RandomSection />
    </main>
  );
};

export default Home;

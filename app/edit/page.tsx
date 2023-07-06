'use client';

import { NavBar, PeopleForm, PeopleTable } from '@/components';
import Link from 'next/link';
import { useState } from 'react';

const Edit = () => {
  const [formIsActive, setFormActive] = useState(false);

  const toggleForm = () => setFormActive((prev) => !prev);

  return (
    <main className="container min-h-screen mx-auto bg-base-100">
      <NavBar />

      <section className="flex justify-end my-4">
        <Link href="/" className="btn btn-success btn-xs">
          Home
        </Link>
      </section>

      <PeopleTable />

      <section className="flex justify-around my-28">
        <button className="btn btn-neutral" onClick={toggleForm}>
          Add someone
        </button>
        <button className="btn btn-neutral">Add file</button>
      </section>

      {formIsActive && <PeopleForm />}
    </main>
  );
};

export default Edit;

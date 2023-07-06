'use client';

import { NavBar, PeopleForm, PeopleTable } from '@/components';
import { usePeople } from '@/contexts/People';
import Link from 'next/link';
import { useState } from 'react';

const Edit = () => {
  const { removeAll, addPerson } = usePeople();
  const [formIsActive, setFormActive] = useState(false);

  const handleFileInput = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const contents = e.target.result;
        const jsonData = JSON.parse(contents);
        jsonData.forEach(({ name, email }: any) => {
          addPerson({ name, email });
        });
      };

      reader.readAsText(file);
    }
  };

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
        <input type="file" className="file-input file-input-bordered w-full max-w-xs" multiple={false} onChange={handleFileInput} />
        <button className="btn btn-error" onClick={() => removeAll()}>
          Reset
        </button>
      </section>

      {formIsActive && <PeopleForm />}
    </main>
  );
};

export default Edit;

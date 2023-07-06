'use client';

import { AppPerson, usePeople } from '@/contexts/People';
import { NavBar } from '@/components';

const Edit = () => {
  const { people, removePerson } = usePeople();

  const handleDelete = (person: AppPerson) => removePerson(person.email);

  return (
    <main className="container min-h-screen mx-auto bg-base-100">
      <NavBar />

      <section>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, index) => (
              <tr key={person.email} className="hover">
                <th>{index}</th>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>
                  <button className="btn btn-error btn-xs" onClick={() => handleDelete(person)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Edit;

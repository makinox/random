import { usePeople } from '@/contexts/People';

export const PeopleForm = () => {
  const { addPerson } = usePeople();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, email } = event.target as typeof event.target & {
      name: { value: string };
      email: { value: string };
    };

    addPerson({ name: name.value, email: email.value });
  };

  return (
    <form className="w-full flex justify-center items-end gap-8" onSubmit={handleSubmit}>
      <div>
        <span className="label-text">Name</span>
        <input type="text" name="name" className="input input-success w-full max-w-xs" />
      </div>
      <div>
        <span className="label-text">Email</span>
        <input type="email" name="email" className="input input-success w-full max-w-xs" />
      </div>
      <button className="btn btn-success" type="submit">
        Submit
      </button>
    </form>
  );
};

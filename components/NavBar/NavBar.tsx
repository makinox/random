import { FaTwitterSquare, FaLinkedin, FaHome } from 'react-icons/fa';
import Link from 'next/link';

export const NavBar = () => {
  return (
    <nav className="navbar bg-base-200 rounded-3xl my-4">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Random
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="https://jesusbossa.dev" target="_blank" rel="noreferrer">
              <FaHome size={20} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/makinox" target="_blank" rel="noreferrer">
              <FaTwitterSquare size={20} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/jesMakinox" target="_blank" rel="noreferrer">
              <FaLinkedin size={20} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

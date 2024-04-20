import { Link } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link
          className="transition duration-300 ease-in hover:-translate-y-2 text-orange-600"
          to="/"
        >
          Features
        </Link>
      </li>
      <li>
        <Link
          className="transition duration-300 ease-in hover:-translate-y-2 text-orange-600"
          to="/"
        >
          Workflow
        </Link>
      </li>
      <li>
        <Link
          className="transition duration-300 ease-in hover:-translate-y-2 text-orange-600"
          to="/"
        >
          Pricing
        </Link>
      </li>
      <li>
        <Link
          className="transition duration-300 ease-in hover:-translate-y-2 text-orange-600"
          to="/"
        >
          Testimonials
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-white lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white"
          >
            {links}
          </ul>
        </div>
        <div>
          <a className="btn btn-ghost text-xl text-white transition duration-500 ease-out hover:ease-in hover:bg-gradient-to-r from-orange-500 to-red-800 hover:translate-y-2">
            Virtual
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn mr-2 bg-orange-500 transition duration-500 ease-out hover:in hover:translate-y-2  hover:bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text border border-none">
          Sign In
        </a>
        <a className="btn mr-2 bg-orange-500 transition duration-500 ease-out hover:ease-in hover:translate-y-2  hover:bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text border border-none">
          Log In
        </a>
      </div>
    </div>
  );
};

export default Navbar;

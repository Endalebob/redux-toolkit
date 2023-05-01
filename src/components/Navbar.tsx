// components/Navbar.tsx
import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex justify-around p-4 bg-green-200 ">
      <div className="flex">
        <a className="btn btn-ghost normal-case text-xl">My Website</a>
      </div>
      <div className="flex-none">
        <ul className="flex gap-4 px-1">
          <li>
            <Link
              className=" border-2 border-zinc-700 hover:bg-green-500 hover:border-0 p-1 rounded-md"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className=" border-2 border-zinc-700 hover:bg-green-500 hover:border-0 p-1 rounded-md"
              href="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className=" border-2 border-zinc-700 hover:bg-green-500 hover:border-0 p-1 rounded-md"
              href="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;

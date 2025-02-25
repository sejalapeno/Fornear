import React from 'react';
import Logo from '../Logo';
import NavLink from './NavLink';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#ffdd00] p-6">
      <div className="block lg:hidden">
        <button
          type="button"
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <Logo />
          <span className="text-link tracking-tight">Fornear @ OU</span>
        </div>
        <div className="text-xl lg:flex-grow flex">
          {[
            { name: 'Home', link: '/' },
            {
              name: 'Staff',
              link: '/staff',
              dropdown: {
                Requests: '/staff/requests',
                Inventory: '/staff/inventory',
                'Create Package': '/staff/create-package',
                Insert: '/staff/insert',
                Update: '/staff/update',
              },
            },
            { name: 'Admin', link: '/admin' },
          ].map((item) => (
            <NavLink
              key={item.name}
              name={item.name}
              link={item.link}
              dropdown={item.dropdown}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}

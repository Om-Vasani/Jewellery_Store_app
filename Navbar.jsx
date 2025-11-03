import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-lg font-semibold text-gold">💎 Amidip Jewellers</h1>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gold focus:outline-none"
        >
          ☰
        </button>
        <ul className={`md:flex md:space-x-6 text-gray-700 font-medium ${open ? "block mt-4" : "hidden"} md:block`}>
          {["Home", "Catalog", "About", "Contact", "Admin"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-gold block py-2">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

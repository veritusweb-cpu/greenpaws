"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="text-3xl font-bold tracking-tight text-emerald-700"
        >
          GreenPaws
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-gray-700">

          <a href="#services" className="hover:text-emerald-700 transition">
            Services
          </a>

          <a href="#doctors" className="hover:text-emerald-700 transition">
            Doctors
          </a>

          <a href="#reviews" className="hover:text-emerald-700 transition">
            Reviews
          </a>

          <a href="#contact" className="hover:text-emerald-700 transition">
            Contact
          </a>

        </div>

        {/* Desktop Button */}

        <a
          href="#appointment"
          className="hidden md:inline-flex bg-emerald-700 hover:bg-emerald-800 transition text-white px-6 py-3 rounded-full font-semibold"
        >
          Book Appointment
        </a>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>

      </div>

      {open && (

        <div className="md:hidden bg-white border-t">

          <a
            href="#services"
            onClick={() => setOpen(false)}
            className="block px-6 py-5"
          >
            Services
          </a>

          <a
            href="#doctors"
            onClick={() => setOpen(false)}
            className="block px-6 py-5"
          >
            Doctors
          </a>

          <a
            href="#reviews"
            onClick={() => setOpen(false)}
            className="block px-6 py-5"
          >
            Reviews
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block px-6 py-5"
          >
            Contact
          </a>

          <a
            href="#appointment"
            onClick={() => setOpen(false)}
            className="block m-5 bg-emerald-700 text-white text-center py-3 rounded-full font-semibold"
          >
            Book Appointment
          </a>

        </div>

      )}

    </nav>
  );
}
"use client"

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
      <nav className="w-full bg-black text-white shadow-lg fixed top-0 left-0 z-[9999] pointer-events-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div
                    className="w-10 h-10 flex items-center justify-center">
                  <img src="/logo.png" alt="WeCode Logo"/>
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight"><a href={"/"}> WeCode </a></span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <Link href="/#events" className="hover:underline text-sm font-medium">
                Events
              </Link>

                <Link href="/wecode" className="hover:underline text-sm font-medium">
                  WeCode Timeline
                </Link>


              <a href="/careers" className="hover:underline text-sm font-medium">
                Open Positions
              </a>
              <a href="https://shorturl.at/JuvV8" className="hover:underline text-sm font-medium">
                Ecertificates
              </a>
              <a href="#contact" className="hover:underline text-sm font-medium">
                Contact Us
              </a>

              <a
                  href="https://discord.gg/dk25zDfk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 inline-block px-4 py-2 bg-white text-[#1e3a8a] font-semibold rounded-full shadow hover:brightness-105 transition"
              >
                Join Discord
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                  aria-label="menu"
                  onClick={() => setOpen((o) => !o)}
                  className="p-2 rounded-md hover:bg-white/20 transition"
              >
                {open ? <X size={24}/> : <Menu size={24}/>}
              </button>
            </div>
          </div>
        </div>

        {open && (
            <div className="md:hidden px-4 pb-4 space-y-3 border-t border-white/20">
              <a
                  href="#events"
                  className="block text-base font-medium hover:underline"
                  onClick={() => setOpen(false)}
              >
                Events
              </a>
                 <a
                  href="/wecode"
                  className="block text-base font-medium hover:underline"
                  onClick={() => setOpen(false)}
                >
                  WeCode Timeline
                </a>

              <a
                  href="/careers"
                  className="block text-base font-medium hover:underline"
                  onClick={() => setOpen(false)}
              >
                Open Positions
              </a>

              <a href="https://shorturl.at/JuvV8" className="block text-base font-medium hover:underline">
                Ecertificates
              </a>
              <a
                  href="#contact"
                  className="block text-base font-medium hover:underline"
                  onClick={() => setOpen(false)}
              >
                Contact Us
              </a>

              <a
                  href="https://discord.gg/dk25zDfk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2 px-4 py-2 bg-white text-[#1e3a8a] font-semibold rounded-full text-center"
              >
                Join Discord
              </a>
            </div>
        )}
      </nav>
  );
}

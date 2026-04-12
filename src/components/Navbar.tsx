"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-[#0A0A0F] border-b border-gray-900">

      {/* Logo */}
      <Link href="/" className="text-xl font-bold">
        MOVEGRID
      </Link>

      {/* Links */}
      <div className="flex gap-6">

        <Link href="/" className="hover:text-[#6C5CE7]">
          Home
        </Link>

        <Link href="/invest" className="hover:text-[#6C5CE7]">
          Invest
        </Link>

      </div>

    </nav>
  );
}
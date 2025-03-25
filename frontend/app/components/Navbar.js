"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-900 w-full p-5 text-white flex justify-between items-center">
      <h1 className="text-lg font-bold">Min Bank</h1>
      <div className="flex gap-4">
        <Link href="/Login" className="hover:underline">
          Loga in
        </Link>
        <Link href="/Create-account" className="hover:underline">
          Skapa konto
        </Link>
      </div>
    </nav>
  );
}

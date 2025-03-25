"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <nav className="bg-amber-700 w-full p-5 text-white flex justify-between items-center">
      <h1 className="text-lg font-bold"></h1>
      <div className="flex gap-4">
        <Link href="/login" className="hover:underline">om oss</Link>
        <Link href="/register" className="hover:underline">kontakt</Link>
      </div>
    </nav>
  );
}

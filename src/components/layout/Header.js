"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const session = useSession()

  return (
    <header className="flex items-center justify-between mb-8">
      <nav className="flex items-center gap-6 text-gray-500 font-semibold">
        <Link href="/" className="text-transparent bg-clip-text bg-gradient-to-r from-[#f13a01] to-yellow-500 font-semibold text-2xl">
          ST PIZZA
        </Link>
        <Link href="/">Home</Link>
        <Link href="">Menu</Link>
        <Link href="">About</Link>
        <Link href="">Contact</Link>
      </nav>
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        {session.status === 'authenticated' ? (
          <>
            <Link href={'/profile'}>{session.data.user.email}</Link>
            <button onClick={() => signOut()} className="submit">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register" className="rounded-full bg-gradient-to-r from-[#f13a01] to-yellow-500 text-white px-8 py-2">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

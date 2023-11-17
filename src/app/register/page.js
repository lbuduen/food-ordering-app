"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    setLoading(true)
    try {
      const req = await fetch('/api/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password })
      })
      setLoading(false)
      if (!req.ok) {
        throw new Error("Network response was not OK")
      }
    } catch (error) {
      console.error("There has been a problem with your fetch operation:", error);
    }
  }

  return (
    <section>
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
      <form className="block max-w-xl mx-auto" onSubmit={handleSubmit}>
        <input type="email" disabled={loading} placeholder="email" value={email} onChange={(evt) => setEmail(evt.target.value)} />
        <input type="password" disabled={loading} placeholder="password" value={password} onChange={(evt) => setPassword(evt.target.value)} />
        <button type="submit" disabled={loading}>Register</button>

        <label className="block my-4 text-center text-gray-500">or login with provider</label>
        <button type="button" className="flex gap-4 justify-center items-center" onClick={() => signIn('google', { callbackUrl: '/' })}>
          <Image src={'/google.png'} alt="" width={24} height={24} />
          Login with Google
        </button>
      </form>
      <div className="text-center my-8">
        Existing account?{' '} Please <Link href={'/login'} className="underline text-primary">log in &raquo;</Link>
      </div>
    </section>
  )
}

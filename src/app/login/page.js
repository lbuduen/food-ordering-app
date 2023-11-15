"use client"
import Image from "next/image"
import { useState } from "react"
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    setLoading(true)
    await signIn("credentials", { email, password })
    setLoading(false)
  }

  return (
    <section>
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form className="block max-w-xl mx-auto" onSubmit={handleSubmit}>
        <input type="email" disabled={loading} placeholder="email" value={email} onChange={(evt) => setEmail(evt.target.value)} />
        <input type="password" disabled={loading} placeholder="password" value={password} onChange={(evt) => setPassword(evt.target.value)} />
        <button type="submit" disabled={loading}>Login</button>
        <label className="block my-4 text-center text-gray-500">or login with provider</label>
        <button className="flex gap-4 justify-center items-center">
          <Image src={'/google.png'} alt="" width={24} height={24} />
          Login with Google
        </button>
      </form>
    </section>
  )
}

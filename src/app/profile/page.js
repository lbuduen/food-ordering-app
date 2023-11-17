"use client"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function ProfilePage() {
  const session = useSession()
  
  if (session.status === 'loading') {
    return 'Loading...'
  
  }
  if (session.status === 'unauthenticated') {
    return redirect('/login')
  }

  return (
    <section>
      <h1 className="text-center text-primary text-4xl mb-4">Profile</h1>
      <form className="block max-w-xl mx-auto">
        
      </form>
    </section>
  )
}
import Image from "next/image";

export default function RegisterPage() {
  return (
    <section>
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
      <form className="block max-w-xl mx-auto">
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Register</button>

        <label className="block my-4 text-center text-gray-500">or login with provider</label>
        <button className="flex gap-4 justify-center items-center">
          <Image src={'/google.png'} alt="" width={24} height={24} />
          Login with Google
        </button>
      </form>
    </section>
  )
}

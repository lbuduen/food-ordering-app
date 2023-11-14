import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />

      <HomeMenu />

      <section className="text-center my-16">
        <SectionHeaders header={'About us'} subHeader={'Our story'} />
        <div className="text-gray-500 max-w-lg mx-auto mt-4 flex flex-col gap-4">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor enim voluptatum quos non saepe dolorum necessitatibus, minima perferendis, obcaecati ad voluptatem illo doloribus fuga libero excepturi omnis fugit, corporis tempora!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem dolores, eius officiis deserunt earum? Quis ut molestias sit doloremque impedit quia eos veritatis, quidem recusandae, unde cum facilis. Atque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maxime aliquid ullam</p>
        </div>
      </section>

      <section className="text-center my-16">
        <SectionHeaders header={'Contact us'} subHeader={'Don\'t hesitate'} />
        <div className="mt-4">
          <a href="tel:+24478967441" className="text-4xl underline text-gray-600">+244 7896 7441</a>
        </div>
      </section>
    </>
  );
}

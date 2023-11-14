import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
  return (
    <section>
      <div className="absolute left-0 right-0">
        <div className="absolute -top-[70px] left-0 -z-10">
          <Image src="/sallad1.png" alt="sallad" width={109} height={189} />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src="/sallad2.png" alt="sallad" width={107} height={195} />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeaders header={'Menu'} subHeader={'Check out'} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  )
}

import GallerySection from "@/components/gallery/section";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" text-[#325c59] bg-[#faf7f2] py-8">
      <section className="h-56 w-full flex justify-center items-center flex-col gap-4">
        <h1 className="text-4xl tracking-wider font-semibold">nyanyan</h1>
        <h2 className="text-xl  font-medium">digital artist x illustrator</h2>
      </section>
      <GallerySection />
    </main>
  );
}

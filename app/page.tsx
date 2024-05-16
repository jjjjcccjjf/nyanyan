import Bio from "@/components/bio";
import GallerySection from "@/components/gallery/section";

export default async function Home() {
  return (
    <main>
      <GallerySection />
      <Bio />
    </main>
  );
}

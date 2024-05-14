import GallerySection from "@/components/gallery/section";
import React from "react";

export async function generateStaticParams() {
  return [
    { slug: "digital-art" },
    { slug: "pixel-art" },
    { slug: "watercolor-art" },
    { slug: "uncategorized" },
  ];
}

export default function page({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  return <GallerySection slug={params.slug} />;
}

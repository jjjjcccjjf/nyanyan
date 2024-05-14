import React from "react";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { configuredSanityClient } from "@/sanity-client";

export default function GalleryCard({ galleryItem }: { galleryItem: any }) {
  const imageProps = useNextSanityImage(
    configuredSanityClient,
    galleryItem.image,
  );

  const { src, width, height } = imageProps!;

  return (
    <div className="relative w-full">
      <Image
        alt="..."
        width={width}
        height={height}
        sizes="100vw"
        className="object-contain"
        src={src}
      />
      {/* <br />
      <pre>
        {galleryItem.caption}
        <br />
        {galleryItem.category}
      </pre> */}
    </div>
  );
}

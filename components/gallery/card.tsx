import React from "react";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { configuredSanityClient } from "@/sanity-client";
import Link from "next/link";
import { GalleryItem } from "@/types/sanity.types";

export default function GalleryCard({
  galleryItem,
}: {
  galleryItem: GalleryItem;
}) {
  const imageProps = useNextSanityImage(
    configuredSanityClient,
    galleryItem.image!,
  );

  const { src, width, height } = imageProps!;

  return (
    <Link href={`/gallery/item/${galleryItem._id}`}>
      <div className="relative flex w-full items-center justify-center bg-slate-600/5">
        <Image
          alt={galleryItem.caption!}
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
    </Link>
  );
}

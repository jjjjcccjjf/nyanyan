import React from "react";
import Image from "next/image";

export default function GalleryCard({ image }: { image: any }) {
  const imageAttributes = image.attributes.Image.data.attributes;
  const url = process.env.STRAPI_BASE_URL + imageAttributes.url;

  const imageHeight = imageAttributes.height;
  const imageWidth = imageAttributes.width;

  return (
    <div className="w-full relative">
      <Image
        alt="..."
        width={imageWidth}
        height={imageHeight}
        sizes="100vw"
        className="object-contain"
        src={url}
      />
      <br />
      <pre>
        {image.attributes.Caption}
        <br />
        {image.attributes.Category}
      </pre>
    </div>
  );
}

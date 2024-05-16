import { sanityFetch, urlFor } from "@/sanity-client";
import React from "react";
import Image from "next/image";

export async function generateStaticParams() {
  const res = await sanityFetch(`*[_type == 'gallery-item']{_id}`);

  return res;
}

export default async function Page({ params }: { params: { _id: string } }) {
  const res = await sanityFetch(
    `*[_type == 'gallery-item' && _id == '${params._id}'][0]{
      caption,
      _id,
      image {
        asset-> {
          url,
          metadata {
            dimensions {
              width,
              height
            }
          }
        }
      }
    }`,
  );

  const src = await urlFor(res.image);
  const url = src
    // .quality(90)
    .width(res.image.asset.metadata.dimensions.width * 2)
    .height(res.image.asset.metadata.dimensions.height * 2)
    .auto("format")
    .url();
  return (
    <div className="container relative mx-auto flex w-full items-center justify-center bg-gray-700/10 p-6">
      <a href={url} target="_blank">
        <Image
          alt={res.caption}
          // quality={90}
          className="object-contain"
          src={url}
          width={res.image.asset.metadata.dimensions.width * 2}
          height={res.image.asset.metadata.dimensions.height * 2}
        />
      </a>
    </div>
  );
}

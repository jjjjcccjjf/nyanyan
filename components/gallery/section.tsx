import React from "react";
import GalleryCardContainer from "./card-container";
import GalleryCard from "./card";
import { sanityFetch } from "@/sanity-client";
import { GalleryItem } from "@/types/sanity.types";

export default async function GallerySection({ slug }: { slug?: string }) {
  let condition = "";

  if (slug) {
    condition = `category == '${slug}'`;
  }

  const res = await sanityFetch(
    `*[_type == 'gallery-item' && ${condition === "" ? true : condition}] | order(priority desc)`,
  );

  const imagesExtracted = extractImageGroups(res);
  const imagesJSX = buildImagesJSX(imagesExtracted);

  return (
    <section>
      <div className="container mx-auto grid w-full grid-cols-1 gap-8 p-8 md:grid-cols-2 xl:grid-cols-3">
        {imagesJSX.map((item) => item)}
      </div>
    </section>
  );
}

function extractImageGroups(images: Array<GalleryItem>, groupsCount = 3) {
  const length = images.length;
  const perGroup = Math.ceil(length / groupsCount);

  const imagesExtractedArr: Array<Array<any>> = [];

  let lastIndex = 0;
  for (let i = 0; i < groupsCount; i++) {
    const arrEnd = lastIndex + perGroup;

    imagesExtractedArr.push(images.slice(lastIndex, arrEnd));
    lastIndex = arrEnd;
  }

  return imagesExtractedArr;
}

function buildImagesJSX(imagesExtracted: Array<Array<any>>) {
  const imagesJSX = imagesExtracted.map(
    (imageGroup: Array<any>, groupIndex: number) => {
      let imagesJSXtemp: JSX.Element[] = [];

      imagesJSXtemp.push(
        <GalleryCardContainer>
          {imageGroup.map((galleryItem: any, index: number) => {
            return (
              <GalleryCard
                galleryItem={galleryItem}
                key={`${groupIndex}-${index}`}
              />
            );
          })}
        </GalleryCardContainer>,
      );

      return imagesJSXtemp;
    },
  );

  return imagesJSX;
}

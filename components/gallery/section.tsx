import React from "react";
import GalleryCardContainer from "./card-container";
import GalleryCard from "./card";

export default async function GallerySection() {
  const res = await fetch(
    "http://localhost:1337/api/gallery-items?" +
      new URLSearchParams({
        populate: "Image",
      }),
    {
      headers: {
        Authorization:
          "bearer 82ba2515b27ee995b3376d5758180c1712f95e53d0f37cac13d0b528209b7789e05445fa5cf10016616b45a3471bf7fcc19d3c69f9dc531eea5711990a34d244562815d8020f522d97079cb6fe84788f1c3afd198fc1a8d1459d7692723c36f1bc8b6e11d1ba9951e4997eac7219f1fbadf3ef4cfb90b10fd7aaa1cd6914d643",
      },
      next: {
        revalidate: 0,
      },
    }
  );
  const resJson = await res.json();
  const images = resJson.data;

//   console.log(images);

  //   const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const imagesExtracted = extractImageGroups(images);

//   console.log(imagesExtracted);
  const imagesJSX = buildImagesJSX(imagesExtracted);

  return (
    <section className="container w-full bg-slate-700 mx-auto grid grid-cols-3">
      {imagesJSX.map((item) => item)}
    </section>
  );
}

function extractImageGroups(images: Array<any>, groupsCount = 3) {
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
          {imageGroup.map((image: any, index: number) => {
            return <GalleryCard image={image} key={`${groupIndex}-${index}`} />;
          })}
        </GalleryCardContainer>
      );

      return imagesJSXtemp;
    }
  );

  return imagesJSX;
}

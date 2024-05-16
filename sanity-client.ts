import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { GalleryItem } from "./types/sanity.types";

export const configuredSanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: false,
});

const builder = imageUrlBuilder(configuredSanityClient);

export async function sanityFetch(groq: string) {
  return await configuredSanityClient.fetch(
    groq,
    {},
    {
      next: {
        revalidate: 60,
      },
    },
  );
}

export async function urlFor(source: GalleryItem["image"]) {
  return builder.image(source!);
}

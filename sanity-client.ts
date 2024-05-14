import { createClient } from "next-sanity";

export const configuredSanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: false,
});

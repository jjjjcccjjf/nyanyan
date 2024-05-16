import { sanityFetch } from "@/sanity-client";
import React from "react";

export default async function Bio() {
  const res = await sanityFetch(`*[_type == 'personal-info'][0]`);

  return (
    <section className="mx-auto flex max-w-sm flex-col items-start justify-center gap-8 px-8 py-16 md:max-w-md lg:max-w-lg xl:max-w-xl">
      <h3 className="text-5xl font-bold">About me</h3>
      <p>{res.bio}</p>
      <button className="self-center  rounded-xl w-fit px-8 py-4 border border-[#325c59]">!WIP! Let&apos;s work together !WIP!</button>
    </section>
  );
}

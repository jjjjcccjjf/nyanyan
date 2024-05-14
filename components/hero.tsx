import React from "react";
import { configuredSanityClient } from "@/sanity-client";

export default async function Hero() {
  const res = await configuredSanityClient.fetch(
    `*[_type == 'personal-info'][0]`,
    {},
    {
      next: {
        revalidate: 60,
      },
    },
  );

  return (
    <>
      <section className="flex h-56 w-full flex-col items-center justify-center gap-4 pt-8">
        <h1 className="text-4xl font-bold tracking-widest">{res.name}</h1>
        <h2 className="text-xl font-medium tracking-wide">{res.selfTitle}</h2>
      </section>
      <section className="fixed right-0 top-2 z-20 flex h-20 w-64 items-center justify-end">
        <a
          className="absolute mr-8 rounded-xl border border-[#325c59] border-opacity-0 px-5 py-2.5 text-sm font-medium tracking-widest underline transition-all duration-200 hover:border-opacity-100 hover:bg-[#ece8f5] hover:no-underline"
          href={`mailto:${res.email}`}
        >
          CONTACT
        </a>
      </section>
    </>
  );
}

import { ComponentWithChildren } from "@/types";
import React from "react";

export default function GalleryCardContainer({
  children,
}: ComponentWithChildren) {
  return <div className="flex flex-col gap-8">{children}</div>;
}

"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav() {
  const pathname = usePathname();
  return (
    <section>
      <div className="flex items-center justify-center pb-4">
        <ul className="flex gap-6">
          <li>
            <Link
              className={pathname === "/" ? "no-underline" : "underline"}
              href="/"
            >
              All
            </Link>
          </li>
          <li>
            <Link
              className={
                pathname === "/category/pixel-art" ? "pixel-art" : "underline"
              }
              href="/category/pixel-art"
            >
              Pixel Art
            </Link>
          </li>
          <li>
            <Link
              className={
                pathname === "/category/digital-art"
                  ? "digital-art"
                  : "underline"
              }
              href="/category/digital-art"
            >
              Digital Art
            </Link>
          </li>
          <li>
            <Link
              className={
                pathname === "/category/watercolor-art"
                  ? "watercolor-art"
                  : "underline"
              }
              href="/category/watercolor-art"
            >
              Watercolor Art
            </Link>
          </li>
          <li>
            <Link
              className={
                pathname === "/category/uncategorized"
                  ? "uncategorized"
                  : "underline"
              }
              href="/category/uncategorized"
            >
              Uncategorized
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

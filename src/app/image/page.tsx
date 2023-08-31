"use client";
import "@/scss/components/image.scss";

import { useSearchParams } from "next/navigation";

type props = {
  url: string;
};

export default function ImageRoute() {
  const imageParam = useSearchParams();
  const url = imageParam.get("url");
  console.log(url);

  return (
    <>
      <img src={url !== null ? url : ""} alt="" className="image_page" />

      <h1>Image Page</h1>
    </>
  );
}

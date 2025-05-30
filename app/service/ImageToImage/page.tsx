"use client";

import React, { useState } from "react";
import ImageToImageGenerator from "@/app/components/Sidebar/ImageToImageGenerator";
import ImagesToImages from "@/app/components/ImagestoImages";

export default function ImageToImage() {
  return (
    <div className="flex">
      <ImageToImageGenerator />
      <div className="flex-1 bg-gray-100 p-20">
      <ImagesToImages />       
      </div>
    </div>
  );
}

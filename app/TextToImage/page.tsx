'use client';
import { useState } from "react";
import MenuSidebar from "../components/Sidebar/MenuSidebar";
import TextToImageContent from "../components/TextToImagecontent/page";
import ImageGeneratorOption from "../components/Sidebar/ImageGeneratorOption";
export default function TextToImagePage() {
  return (
    <div className="flex">
      <MenuSidebar />
      <ImageGeneratorOption />
      <div className="flex-1">
        {/* Render your content depending on the active menu */}
        <TextToImageContent /> {/* Just a placeholder */}
      </div>
    </div>
  );
}

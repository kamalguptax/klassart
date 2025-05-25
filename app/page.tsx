'use client';

import Image from "next/image";
import { HeroBanner } from "../app/components/HeroBanner/HeroBanner";

import { DetailedFeatures } from "./components/DetailedFeatures/DetailedFeatures";
import { Faq } from "../app/components/Faq/Faq";
import { PricingSection } from "../app/components/PricingSection/PricingSection";
import { Thumbnails } from "./components/Thumnails/Thumnails";
import { UltimateFeature } from "../app/components/UltimateFeature/UltimateFeature";

export default function Home() {
  return (
    <div className="">
      <HeroBanner />
      <UltimateFeature />
      <DetailedFeatures />
      <Thumbnails />
      <PricingSection />
      <Faq />
    </div>
  );
}

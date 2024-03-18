import React from "react";
import { Hero } from "../../components/hero";
import { Topbanner } from "../../components/topbanner";
import { KeyFeature } from "../../components/keyFeature";
import Accordian from "../../components/Accordian";
export function Home() {
  return (
    <div>
      <Hero />
      <KeyFeature />
      <Accordian />
    </div>
  );
}

"use client";
import React from "react";
import Hero from "../components/Hero";
import DatasetList from "../components/DatasetList";
import ServiceList from "../components/ServiceList";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <DatasetList />
      <ServiceList />
    </React.Fragment>
  );
}

import React from "react";
import Categories from "./Categories";
import Header from "./Header";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <Categories />
    </div>
  );
}

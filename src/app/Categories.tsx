import React from "react";
import CategoriesList, { CategoriesProps } from "./CategoriesList";
import { BsMotherboard, BsCpu, BsMemory, BsGpuCard } from "react-icons/bs";
import { LuPcCase } from "react-icons/lu";
import { ImPowerCord } from "react-icons/im";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Categories: NextPage = () => {
  const router = useRouter();

  const handleClick = (title: string) => {
    router.push(`/categories/${title}`);
  };

  const categoriesItems: CategoriesProps[] = [
    { title: "CPUs", icon: <BsCpu />, handleClick },
    { title: "Memory", icon: <BsMemory />, handleClick },
    { title: "Motherboards", icon: <BsMotherboard />, handleClick },
    { title: "GPUs", icon: <BsGpuCard />, handleClick },
    { title: "Computer Cases", icon: <LuPcCase />, handleClick },
    { title: "Power Supplies", icon: <ImPowerCord />, handleClick },
  ];

  return (
    <main className="container mx-auto border">
      <section className="grid grid-cols-3 gap-4 flex-wrap p-7">
        {categoriesItems.map((item, index) => (
          <CategoriesList
            key={index}
            title={item.title}
            icon={item.icon}
            handleClick={handleClick}
          />
        ))}
      </section>
    </main>
  );
};

export default Categories;

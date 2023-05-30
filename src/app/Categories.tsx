import React from "react";
import CategoriesList, { CategoriesProps } from "./CategoriesList";
import { BsMotherboard, BsCpu, BsMemory, BsGpuCard } from "react-icons/bs"
import { LuPcCase } from "react-icons/lu"
import { ImPowerCord } from "react-icons/im"

export default function Categories() {
  const categoriesItems: CategoriesProps[] = [
    { title: "CPUs", icon: <BsCpu /> },
    { title: "Memory", icon: <BsMemory />  },
    { title: "Motherboards", icon: <BsMotherboard />  },
    { title: "GPUs", icon: <BsGpuCard />  },
    { title: "Computer Cases", icon: <LuPcCase />  },
    { title: "Power Supplies", icon: <ImPowerCord />  },
  ];

  return (
    <main className="container mx-auto border">
      <section className="grid grid-cols-3 gap-4 flex-wrap p-7">
        {categoriesItems.map((item, index) => (
          <CategoriesList key={index} title={item.title} icon={item.icon}/>
        ))}
      </section>
    </main>
  );
}

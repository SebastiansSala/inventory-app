import React from "react";
import CategoriesList, { CategoriesProps } from "./CategoriesList";

export default function Categories() {
  
    const categoriesItems: CategoriesProps[] = [
        {title: "CPUs"},
        {title: "Memory"},
        {title: "Motherboards"},
        {title: "GPUs"},
        {title: "Computer Cases"},
        {title: "Power Supplies"},
    ]
  
    return (
    <main className="container mx-auto border h-full">
        {categoriesItems.map((item, index) => (
             <CategoriesList key={index} title={item.title}/> 
        ))}
    </main>
  );
}

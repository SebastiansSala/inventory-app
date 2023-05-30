import React from "react";

export default function CategoriesList({
  title,
  icon,
  handleClick,
}: CategoriesProps) {
  return (
    <div
      className="flex flex-col justify-center items-center hover:cursor-pointer hover:shadow-md place-content-center border transition-all duration-300 p-2"
      onClick={(e) => handleClick(title)}
    >
      <span className="text-8xl">{icon}</span>
      <span>{title}</span>
    </div>
  );
}

export interface CategoriesProps {
  title: string;
  icon: React.ReactNode;
  handleClick: (title: string) => void;
}

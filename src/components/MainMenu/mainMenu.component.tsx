"use client";
import style from "./mainMenu.module.scss";
import { useState } from "react";
import Link from "next/link";
import Logo from "../Icons/Logo";

const data = [
  {
    name: "Category",
    data: ["Sub Category", "Sub Category", "Sub Category", "Sub Category"],
  },
  {
    name: "Category1",
    data: ["Sub Category1", "Sub Category", "Sub Category", "Sub Category"],
  },
  {
    name: "Category2",
    data: ["Sub Category2", "Sub Category", "Sub Category", "Sub Category"],
  },
  {
    name: "Category3",
    data: ["Sub Category3", "Sub Category", "Sub Category", "Sub Category"],
  },
];

export default function MainMenu() {
  const [currentSubMenu, setCurrentSubMenu] = useState<number | null>(null);

  const toggleSubMenu = (id: number) => {
    setCurrentSubMenu((prev) => (prev === id ? null : id));
  };

  return (
    <div className={style.mainMenu}>
      <div className={style.mainMenuLogo}>
        <Link href={"/"}>
          <Logo />
        </Link>
      </div>
      <nav>
        <ul>
          {data.map((category, index) => (
            <li key={index}>
              <button
                onClick={() => toggleSubMenu(index)}
                className={`${index === currentSubMenu ? style.active : ""}`}
              >
                {category.name}
              </button>
              {index == currentSubMenu && (
                <ol className={style.subMenu}>
                  {category.data.map((subCategory, subIndex) => (
                    <div key={subIndex} className="flex">
                      <input
                        type="checkbox"
                        name={`cat_${subIndex}`}
                        id={`cat_${index}_${subIndex}`}
                      />
                      <label htmlFor={`cat_${index}_${subIndex}`}>
                        {subCategory}
                      </label>
                    </div>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

"use client";
import style from "./mainMenu.module.scss";
import { useState } from "react";
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
  const [currentSubMenu, setCurrentSubMenu] = useState(-1);
  const showSubMenu = (id: number) => {
    if (id == currentSubMenu) {
      const nextSubClass = document.getElementById(`subclass_${id}`);
      if (nextSubClass) nextSubClass.style.display = "none";
      setCurrentSubMenu(-1);
      return;
    }
    const prevSubClass = document.getElementById(`subclass_${currentSubMenu}`);
    if (prevSubClass) prevSubClass.style.display = "none";
    const nextSubClass = document.getElementById(`subclass_${id}`);
    if (nextSubClass) nextSubClass.style.display = "block";
    setCurrentSubMenu(id);
  };
  return (
    <div className={style.mainMenu}>
      <nav>
        <ul>
          {data.map((d, key) => (
            <li key={key}>
              <button
                onClick={() => showSubMenu(key)}
                className={`${key == currentSubMenu ? style.active : ""}`}
              >
                {d.name}
              </button>
              <ol id={`subclass_${key}`}>
                {d.data.map((el, key) => {
                  return (
                    <div key={`0_${key}`} className={`flex`}>
                      <input type="checkbox" name="cat" id={`cat_${key}`} />
                      <label htmlFor={`cat_${key}`}>{el}</label>
                    </div>
                  );
                })}
              </ol>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

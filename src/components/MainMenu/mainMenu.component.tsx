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
              <button onClick={() => showSubMenu(key)}>{d.name}</button>
              <ol id={`subclass_${key}`}>
                {d.data.map((el, key) => (
                  <li key={`0_${key}`}>{el}</li>
                ))}
              </ol>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

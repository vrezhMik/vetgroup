"use client";
import { useState } from "react";
import style from "./userPageMenu.module.scss";

export default function UserPageMenu() {
  const [activeButton, setActiveButton] = useState("History");

  return (
    <div className={`row flex ${style.menu}`}>
      <button
        className={activeButton === "History" ? style.active : ""}
        onClick={() => setActiveButton("History")}
      >
        History
      </button>
      <button
        className={activeButton === "Settings" ? style.active : ""}
        onClick={() => setActiveButton("Settings")}
      >
        Settings
      </button>
    </div>
  );
}

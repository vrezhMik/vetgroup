import style from "./mainMenu.module.scss";

import Link from "next/link";
export default function MainMenu() {
  return (
    <div className={style.mainMenu}>
      <nav>
        <ul>
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
        </ul>
      </nav>
    </div>
  );
}

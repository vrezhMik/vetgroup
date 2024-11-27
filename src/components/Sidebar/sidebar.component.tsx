import style from "./sidebar.module.scss";
import UserMenu from "../UserMenu/userMenu.component";
import MainMenu from "../MainMenu/mainMenu.component";
export default function Sidebar() {
  return (
    <aside className={`flex ${style.sidebar}`}>
      <UserMenu />
      <MainMenu />
    </aside>
  );
}

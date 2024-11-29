import style from "./userMenu.module.scss";
import Avatar from "../Icons/Avatar";
export default function UserMenu() {
  return (
    <div className={`${style.userMenu} flex`}>
      <div className={style.userMenuAvatar}>
        <Avatar />
      </div>
    </div>
  );
}

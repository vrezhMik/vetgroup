import style from "./userMenu.module.scss";
import Avatar from "../Icons/AvatarSVG";
export default function UserMenu() {
  return (
    <div className={`${style.userMenu} flex`}>
      <div className={style.userMenuAvatar}>
        <Avatar />
      </div>
    </div>
  );
}

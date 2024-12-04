import style from "./userMenu.module.scss";
import Avatar from "../Icons/AvatarSVG";
import Link from "next/link";
export default function UserMenu() {
  return (
    <div className={`${style.userMenu} flex`}>
      <div className={style.userMenuAvatar}>
        <Link href={process.env.NEXT_APP_LOCALHOST + "/user"}>
          <Avatar />
        </Link>
      </div>
    </div>
  );
}

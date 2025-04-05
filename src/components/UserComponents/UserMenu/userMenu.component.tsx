import style from "./userMenu.module.scss";
import Avatar from "../../Elements/Icons/AvatarSVG";
import LogoSVG from "@/components/Elements/Icons/LogoSVG";

import Link from "next/link";
export default function UserMenu() {
  return (
    <div className={`${style.userMenu} flex`}>
      <div className={style.userMenuLogo}>
        <Link href={"/"}>
          <LogoSVG />
        </Link>
      </div>
      <div className={style.userMenuAvatar}>
        <Link href={"/user"}>
          <Avatar />
        </Link>
      </div>
    </div>
  );
}

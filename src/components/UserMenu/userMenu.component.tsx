import style from "./userMenu.module.scss";
import ImageComponent from "../Image/image.component";
import Link from "next/link";
export default function UserMenu() {
  return (
    <div className={`${style.userMenu} flex`}>
      <div className={style["userMenuLogo"]}>
        <Link href={"/"}>
          <ImageComponent url={"http://127.0.0.1:3000/logo.png"} alt={"logo"} />
        </Link>
      </div>
      <div>
        <div className={style["userMenuCart"]}>
          <ImageComponent url={"./cart.svg"} alt={"cart"} />
        </div>
        <div className={style["userMenuAvatar"]}>
          <ImageComponent url={"./avatar.svg"} alt={"avatar"} />
        </div>
      </div>
    </div>
  );
}

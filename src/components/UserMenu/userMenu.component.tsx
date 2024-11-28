import style from "./userMenu.module.scss";
import ImageComponent from "../Image/image.component";
import Link from "next/link";
import Avatar from "../Icons/Avatar";
import Cart from "../Icons/Cart";
import Logo from "../Icons/Logo";
export default function UserMenu() {
  return (
    <div className={`${style.userMenu} flex`}>
      <div className={style["userMenuLogo"]}>
        <Link href={"/"}>
          {/* <ImageComponent url={"http://127.0.0.1:3000/logo.png"} alt={"logo"} /> */}
          <Logo />
        </Link>
      </div>
      <div>
        <div className={style["userMenuCart"]}>
          {/* <ImageComponent url={"./cart.svg"} alt={"cart"} /> */}
          <Cart />
        </div>
        <div className={style["userMenuAvatar"]}>
          <Avatar />
        </div>
      </div>
    </div>
  );
}

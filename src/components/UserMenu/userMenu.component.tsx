import style from "./userMenu.module.scss";

export default function UserMenu() {
  return (
    <div className={`${style.userMenu} flex`}>
      <div>logo</div>
      <div>
        <div>Cart</div>
        <div>Profile</div>
      </div>
    </div>
  );
}

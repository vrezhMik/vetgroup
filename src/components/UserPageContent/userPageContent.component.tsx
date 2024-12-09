import Password from "../Password/password.component";
import UserPageMenu from "../UserPageMenu/userPageMenu.component";
import style from "./userPageContent.module.scss";
export default function UserPageContent() {
  return (
    <div className={style.content}>
      <UserPageMenu />
      <Password/>
    </div>
  );
}

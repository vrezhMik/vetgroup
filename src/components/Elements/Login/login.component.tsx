"use client";

import LogoSVG from "../Icons/LogoSVG";
import style from "./login.module.scss";
import { login } from "@/utils/query";

export default function Login() {
  const send_request = async () => {
    await login("test@localhost.com", "test1234");
  };

  return (
    <div className={`flex ${style.login}`}>
      <div className={` flex ${style["login-form"]}`}>
        <div className={`row ${style["login-form-logo"]}`}>
          <LogoSVG />
        </div>
        <div className={`row flex`}>
          <input type="text" name="" id="" placeholder="username" />
        </div>
        <div className={`row flex`}>
          <input type="password" name="" id="" placeholder="password" />
        </div>
        <div className={`row flex`}>
          <button onClick={send_request}>Log In</button>
        </div>
      </div>
    </div>
  );
}

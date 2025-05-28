"use client";

import { useState } from "react";
import LogoSVG from "../Icons/LogoSVG";
import style from "./login.module.scss";
import { login } from "@/utils/query";
import { loginFormState } from "@/store/store";
import Link from "next/link";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isError, setIsError } = loginFormState();

  const send_request = async () => {
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }
    try {
      await login(username, password);
    } catch (error) {
      console.error(error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className={`flex ${style.login}`}>
      <div className={`flex ${style["login-form"]}`}>
        <div className={`row ${style["login-form-logo"]}`}>
          <Link href={"/"}>
            <LogoSVG />
          </Link>
        </div>

        <div className={style.error_container}>
          {isError && <p>Wrong Email or Password</p>}
        </div>

        <div className={`row flex ${isError ? style["error_form"] : ""}`}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setIsError(false);
            }}
          />
        </div>
        <div className={`row flex ${isError ? style["error_form"] : ""}`}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setIsError(false);
            }}
          />
        </div>
        <div className={`row flex`}>
          <button onClick={send_request}>Log In</button>
        </div>
      </div>
    </div>
  );
}

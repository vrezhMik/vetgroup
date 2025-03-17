"use client";

import { useState } from "react";
import LogoSVG from "../Icons/LogoSVG";
import style from "./login.module.scss";
import { login } from "@/utils/query";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const send_request = async () => {
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    try {
      const response = await login(username, password);
      console.log("Login Response:", response);
    } catch (error) {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className={`flex ${style.login}`}>
      <div className={`flex ${style["login-form"]}`}>
        <div className={`row ${style["login-form-logo"]}`}>
          <LogoSVG />
        </div>
        <div className={`row flex`}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={`row flex`}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={`row flex`}>
          <button onClick={send_request}>Log In</button>
        </div>
      </div>
    </div>
  );
}

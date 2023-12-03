import React from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  function LoginButton() {
    if (name === "surya" && password === "1234") {
      navigate("/");
    } else {
      if (name === "" || password === "") {
        setErrorMessage("Cannot keep empty");
      } else {
        setErrorMessage("Enter the correct username and password");
      }
    }
  }

  return (
    <div>
      <div className={styles.container}>
        <h1>Login</h1>
        <div className={styles.box}>
          <input
            type="text"
            placeholder="Enter UserName"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button onClick={LoginButton}>Login</button>
          <span>
            New to website{" "}
            <button
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </button>
          </span>
          <p id="error">{errorMessage}</p>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import styles from "./register.module.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const registerbutton = () => {
    navigate("/");
  };
  return (
    <div>
      <div className={styles.container}>
        <h2>Register</h2>
        <div className={styles.box}>
          <input type="text" placeholder="Enter UserName"></input>
          <input type="password" placeholder="Enter Password"></input>
          <input type="password" placeholder="Renter Password"></input>
          <button onClick={registerbutton}>Register</button>
          <span>
            Already a User ?{" "}
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;

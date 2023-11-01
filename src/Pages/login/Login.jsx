import React from "react";
import styles from "./Login.module.css"
function Login() {
  return <div>
    <div className={styles.container}>
    <h1>Login</h1>
        <div className={styles.box}>
        <input type="text" placeholder="Enter UserName"></input>
        <input type="password" placeholder="Enter Password"></input>
        <button>Login</button>
        
        </div>

    </div>
  </div>;
}

export default Login;

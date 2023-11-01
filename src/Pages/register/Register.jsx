import React from "react";
import styles from "./register.module.css"
function Register() {
  return <div>
    <div className={styles.container}>
        <h2>Register</h2>
        <div className={styles.box}>
        <input type="text" placeholder="Enter UserName"></input>
        <input type="password" placeholder="Enter Password"></input>
        <input type="password" placeholder="Renter Password"></input>
        <button>Register</button>
        <span>New to website <a href="www.ggogle.com">login</a></span>
        </div>

    </div>
  </div>;
}

export default Register;

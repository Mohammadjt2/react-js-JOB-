import React, { useState } from "react";
import "./Register.css";
import Navbar from "./../../Components/NavBar/NavBar";
import Footer from "./../../Components/Footer/Footer";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState({
    isValid: false,
    value: "",
  });
  const [mobile, setMobile] = useState({
    isValid: false,
    value: "",
  });
  const [email, setEmail] = useState({
    isValid: false,
    value: "",
  });

  const [password, setPassword] = useState({
    isValid: false,
    value: "",
  });
  const [passwordRepeat, setPasswordRepeat] = useState({
    isValid: false,
    value: "",
  });

  const changeUsernameHandler = (e) => {
    let valueUsername = e.target.value;
    const regexUsername = /^\w{3,30}$/gm;
    const regexUsernameResult = regexUsername.test(valueUsername);
    if (regexUsernameResult) {
      setUsername({ isValid: true, value: e.target.value });
    } else {
      setUsername({ isValid: false, value: e.target.value });
    }
  };

  const changeMobileHandler = (e) => {
    let valueMobile = e.target.value;
    const regexMobile = /^09[0-9]{9}$/gm;
    const regexMobileResultMobile = regexMobile.test(valueMobile);
    if (regexMobileResultMobile) {
      setMobile({ isValid: true, value: e.target.value });
    } else {
      setMobile({ isValid: false, value: e.target.value });
    }
  };

  const changeEmailHandler = (e) => {
    let valueEmail = e.target.value;
    const regexEmail = /^([\w\.\-\_])+@\w{3,5}\.[a-zA-Z]{3}$/gm;
    const regexMobileResultEmail = regexEmail.test(valueEmail);
    if (regexMobileResultEmail) {
      setEmail({ isValid: true, value: e.target.value });
    } else {
      setEmail({ isValid: false, value: e.target.value });
    }
  };

  const changePasswordHandler = (e) => {
    let valuePassword = e.target.value;
    const regexPassword = /^\w{8,30}$/gm;
    const regexMobileResultPassword = regexPassword.test(valuePassword);
    if (regexMobileResultPassword) {
      setPassword({ isValid: true, value: e.target.value });
    } else {
      setPassword({ isValid: false, value: e.target.value });
    }
    setPasswordRepeat({ value: e.target.value });
  };

  const changePasswordRepeatHandler = (e) => {
    let valuePasswordRepeat = e.target.value;
    if (valuePasswordRepeat === password.value) {
      setPasswordRepeat({ isValid: true, value: e.target.value });
    } else {
      setPasswordRepeat({ isValid: false, value: e.target.value });
    }
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   if (
  //     username.isValid &&
  //     mobile.isValid &&
  //     email.isValid &&
  //     password.isValid &&
  //     passwordRepeat.isValid
  //   ) {
  //     let user = {
  //       username: username.value,
  //       mobile: mobile.value,
  //       email: email.value,
  //       password: password.value,
  //       passwordRepeat: passwordRepeat.value,
  //     };

  //     fetch(
  //       "https://console.firebase.google.com/project/reactjs-job-b20f1/database/reactjs-job-b20f1-default-rtdb/data/~2F",
  //       {
  //         method: "POST",
  //         body: JSON.stringify(user),
  //       }
  //     ).then((response) => console.log(response));
  //   }
  // };

  return (
    <div>
      <Navbar />
      <div className="Register">
        <form
          className={`${
            username.isValid &&
            mobile.isValid &&
            email.isValid &&
            password.isValid &&
            passwordRepeat.isValid
              ? "success"
              : "error"
          }`}
          action=""
        >
          <h2>اطلاعات خود را وارد کنید</h2>
          <span>اگر با ما حساب کاربری دارید، وارد شوید</span>
          <label htmlFor="">نام</label>
          <input
            onChange={changeUsernameHandler}
            className={`${username.isValid ? "success" : "error"}`}
            placeholder="نام کاربری را وارد کنید"
            type="text"
          />
          <label htmlFor="">شماره موبایل</label>
          <input
            onChange={changeMobileHandler}
            className={`${mobile.isValid ? "success" : "error"}`}
            placeholder="شماره موبایل را وارد کنید"
            type="text"
          />
          <label htmlFor="">ایمیل</label>
          <input
            onChange={changeEmailHandler}
            className={`${email.isValid ? "success" : "error"}`}
            placeholder="ایمیل را وارد کنید"
            type="email"
          />
          <label htmlFor="">رمز عبور</label>
          <input
            onChange={changePasswordHandler}
            className={`${password.isValid ? "success" : "error"}`}
            placeholder="رمز عبور را وارد کنید"
            type="password"
          />
          <label htmlFor="">تکرار رمز عبور</label>
          <input
            onChange={changePasswordRepeatHandler}
            className={`${passwordRepeat.isValid ? "success" : "error"}`}
            placeholder="تکرار رمز عبور را وارد کنید"
            type="password"
          />
          <Link to="/">
            <Button title="ایجاد حساب" />
          </Link>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Register;

import React from "react";
import "./Register.css";
import Navbar from "./../../Components/NavBar/NavBar";
import Footer from "./../../Components/Footer/Footer";
import Button from "../../Components/Button/Button";

function Register() {
  return (
    <div>
      <Navbar />
      <div className="Register">
        <form className="form" action="#">
          <h2>اطلاعات خود را وارد کنید</h2>
          <span>اگر با ما حساب کاربری دارید، وارد شوید</span>
          <label htmlFor="">نام</label>
          <input placeholder="نام را وارد کنید" type="text" />
          <label htmlFor="">نام خانوادگی</label>
          <input placeholder="نام خانوادکی را وارد کنید" type="text" />
          <label htmlFor="">ایمیل</label>
          <input placeholder="ایمیل را وارد کنید" type="email" />
          <label htmlFor="">رمز عبور</label>
          <input placeholder="پسورد را وارد کنید" type="password" />
          <Button title="ایجاد حساب" />
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Register;

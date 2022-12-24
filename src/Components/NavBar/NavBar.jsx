import React from "react";
import "./NavBar.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">
        <img src="/images/log-white.png" className="navBar-img" alt="logo" />
      </Link>
      <ul className="navBar-ul">
        <Link to="/">
          <li className="navBar-li">صفحه اصلی</li>
        </Link>
        <li className="navBar-li">
          <div>
            <a href="#">کارجویان</a>
            <KeyboardDoubleArrowDownIcon className="navBar-icon" />
          </div>
          <div className="navBar-li-jobSeekers">
            <a href="#">پروفایل</a>
            <a href="#">رزومه</a>
            <a href="#">شغل های درخواستی</a>
            <a href="#">شغل های پیشنهادی</a>
            <a href="#">شغل های ذخیره</a>
            <a href="#">مدیریت رزومه</a>
            <a href="#">تغییر رمز عبور</a>
          </div>
        </li>
        <li className="navBar-li">
          <div>
            <a href="#">کارفرما</a>
            <KeyboardDoubleArrowDownIcon className="navBar-icon" />
          </div>
          <div className="navBar-li-jobSeekers sag">
            <a href="#">پروفایل شرکت</a>
            <a href="#">رزومه</a>
            <a href="#">ارسال مشاغل</a>
            <a href="#">مدیریت مشاغل</a>
            <a href="#">معاملات</a>
            <a href="#">جستجوی کارجویان</a>
            <div className="navBar-submenu">
              <a href="#">
                ثبت نام <span className="navBar-submenu-new">جدید</span>
              </a>
              <KeyboardDoubleArrowLeftIcon className="navBar-icon" />
            </div>
          </div>
        </li>
        <li className="navBar-li">
          <div>
            <a href="#">صفحات</a>
            <KeyboardDoubleArrowDownIcon className="navBar-icon" />
          </div>
          <div className="navBar-li-jobSeekers">
            <a href="#">درباره ما</a>
            <a href="#">جزئیات شغل</a>
            <a href="#">شرکا</a>
            <a href="#">شغل های باز</a>
            <div className="navBar-submenu">
              <a href="#">جستجوی شغل</a>
              <KeyboardDoubleArrowLeftIcon className="navBar-icon" />
            </div>
            <div className="navBar-submenu">
              <a href="#">شغل ها</a>
              <KeyboardDoubleArrowLeftIcon className="navBar-icon" />
            </div>
            <div className="navBar-submenu">
              <a href="#">نمونه کارها</a>
              <KeyboardDoubleArrowLeftIcon className="navBar-icon" />
            </div>
            <div className="navBar-submenu">
              <a href="#">ورود</a>
              <KeyboardDoubleArrowLeftIcon className="navBar-icon" />
            </div>
            <div className="navBar-submenu">
              <a href="#">ثبت نام</a>
              <KeyboardDoubleArrowLeftIcon className="navBar-icon" />
            </div>
            <a href="#">خطای 404</a>
            <a href="#">به زودی</a>
            <a href="#">ارتباط با ما</a>
          </div>
        </li>
        <li className="navBar-li">
          <div>
            <a href="#">درباره ما</a>
            <KeyboardDoubleArrowDownIcon className="navBar-icon" />
          </div>
          <div className="navBar-li-jobSeekers">
            <a href="#">کلاسیک</a>
            <a href="#">جدولی با جزئیات</a>
            <a href="#">تصویر دار</a>
            <a href="#">جزئیات وبلاگ</a>
          </div>
        </li>
      </ul>
      <div className="navBar-button">
        <Link to="/LogIn">
          <Button title="ورود" />
        </Link>
        <Link to="/Register">
          <Button title="ثبت نام" />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;

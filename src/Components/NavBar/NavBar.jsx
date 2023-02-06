import React from "react";
import "./NavBar.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">
        <img src="/images/log-white.png" className="navBar-img" alt="logo" />
      </Link>
      <ul className="navBar-menu">
        <Link to="/">
          <li className="navBar-ul">صفحه اصلی</li>
        </Link>
        <ul className="navBar-ul">
          <li>
            <a href="#">کارجویان</a>
            <KeyboardArrowDownIcon className="navBar-icon" />
          </li>
          <li className="navBar-li-jobSeekers">
            <a href="#">پروفایل</a>
            <a href="#">رزومه</a>
            <a href="#">شغل های درخواستی</a>
            <a href="#">شغل های پیشنهادی</a>
            <a href="#">شغل های ذخیره</a>
            <a href="#">مدیریت رزومه</a>
            <a href="#">تغییر رمز عبور</a>
          </li>
        </ul>
        <ul className="navBar-ul">
          <li>
            <a href="#">کارفرما</a>
            <KeyboardArrowDownIcon className="navBar-icon" />
          </li>
          <li className="navBar-li-jobSeekers">
            <a href="#">پروفایل شرکت</a>
            <a href="#">رزومه</a>
            <a href="#">ارسال مشاغل</a>
            <a href="#">مدیریت مشاغل</a>
            <a href="#">معاملات</a>
            <a href="#">جستجوی کارجویان</a>
            <li className="navBar-submenu">
              <a href="#">
                ثبت نام <span className="navBar-submenu-new">جدید</span>
              </a>
              <KeyboardArrowLeftIcon className="navBar-icon" />
            </li>
          </li>
        </ul>
        <ul className="navBar-ul">
          <li>
            <a href="#">صفحات</a>
            <KeyboardArrowDownIcon className="navBar-icon" />
          </li>
          <li className="navBar-li-jobSeekers">
            <a href="#">درباره ما</a>
            <a href="#">جزئیات شغل</a>
            <a href="#">شرکا</a>
            <a href="#">شغل های باز</a>
            <li className="navBar-submenu">
              <a href="#">جستجوی شغل</a>
              <KeyboardArrowLeftIcon className="navBar-icon" />
            </li>
            <li className="navBar-submenu">
              <a href="#">شغل ها</a>
              <KeyboardArrowLeftIcon className="navBar-icon" />
            </li>
            <li className="navBar-submenu">
              <a href="#">نمونه کارها</a>
              <KeyboardArrowLeftIcon className="navBar-icon" />
            </li>
            <li className="navBar-submenu">
              <Link to="/Login">ورود</Link>
              <KeyboardArrowLeftIcon className="navBar-icon" />
            </li>
            <li className="navBar-submenu">
              <Link to="/Register">ثبت نام</Link>
              <KeyboardArrowLeftIcon className="navBar-icon" />
            </li>
            <Link to="/Page404">خطای 404</Link>
            <a href="#">به زودی</a>
            <a href="#">ارتباط با ما</a>
          </li>
        </ul>
        <ul className="navBar-ul">
          <li>
            <a href="#">درباره ما</a>
            <KeyboardArrowDownIcon className="navBar-icon" />
          </li>
          <li className="navBar-li-jobSeekers">
            <a href="#">کلاسیک</a>
            <a href="#">جدولی با جزئیات</a>
            <a href="#">تصویر دار</a>
            <a href="#">جزئیات وبلاگ</a>
          </li>
        </ul>
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

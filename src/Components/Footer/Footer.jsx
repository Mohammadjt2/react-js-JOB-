import React from "react";
import "./Footer.css";
import ButtonTwo from "../ButtonTwo/ButtonTwo";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-jobBoard">
          <Link to="/">
            <img
              className="footer-jobBoard-img"
              src="/images/log-white.png"
              alt="jobBoard"
            />
          </Link>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
          <div className="footer-jobBoard-email">
            <input type="text" placeholder="آدرس ایمیل" />
            <ButtonTwo title="عضویت" />
          </div>
          <div className="footer-jobBoard-socialNetwork">
            <TwitterIcon className="TwitterIcon" />
            <InstagramIcon className="InstagramIcon" />
            <LinkedInIcon className="LinkedInIcon" />
            <GoogleIcon className="GoogleIcon" />
            <FacebookIcon className="FacebookIcon" />
          </div>
        </div>
        <div className="footer-question">
          <div className="footer-question-1">
            <h3>سوالات متداول</h3>
            <ul>
              <li>-شرایط استفاده از</li>
              <li>-شرایط ارجاع</li>
              <li className="sag">-پشتیبانی</li>
              <li>-کارجویان</li>
              <li>-کارفرما</li>
              <li>-ارتباط با ما</li>
            </ul>
          </div>
          <div className="footer-question-2">
            <ul>
              <li>-حریم خصوصی و امنیت</li>
              <li>-ارتباطات</li>
              <li>-مجوزهای وام دهی</li>
              <li>-چگونگی کار با سایت</li>
              <li>-پذیره نویسی</li>
              <li>-نحوی پرداخت وام</li>
            </ul>
          </div>
          <div className="footer-Search">
            <h3>جستجوی مشاغل</h3>
            <ul>
              <li>-همدان</li>
              <li>-گیلان</li>
              <li>-سمنان</li>
              <li>-البرز</li>
              <li>-مشهد</li>
              <li>-اهواز</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Mohammadjt2">
        <h2>طراحی شده توسط</h2>
        <span>☞💖》ℳ๑みสℳℳสの《💖☜</span>
      </div>
    </div>
  );
}

export default Footer;

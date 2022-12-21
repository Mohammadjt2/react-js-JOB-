import React from "react";
import "./OurJob.css";
import Button from "../Button/Button";
import Frame from "../Frame/Frame";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

function OurJob() {
  return (
    <div className="ourJob">
      <div className="ourJob-right">
        <h2>شغل های اخیر</h2>
        <span>نظرات کاربران</span>
        <Frame
          src="/images/logo/svg/logo3.svg"
          title="بازاریاب دیجیتال"
          city="سبزوار، مشهد"
          time="نیمه وقت"
          date="6 ماه پیش"
          amount="4,900 - 5,000"
        />
        <Frame
          src="/images/logo/svg/logo1.svg"
          title="بازاریاب دیجیتال"
          city="اردکان، یزد"
          time="تمام وقت"
          date="1 ماه پیش"
          amount="5,200 - 5,500"
        />
        <Frame
          src="/images/logo/svg/logo4.svg"
          title="تریدر"
          city="بوکان، ارومیه"
          time="تمام وقت"
          date="3 ماه پیش"
          amount="5,600 - 6,000"
        />
        <Frame
          src="/images/logo/svg/logo2.svg"
          title="فرانت اند"
          city="دزفول، خوزستان"
          time="نیمه وقت"
          date="8 ماه پیش"
          amount="3,100 - 3,500"
        />
        <Frame
          src="/images/logo/svg/logo3.svg"
          title="فول استک"
          city="ملایر، همدان"
          time="تمام وقت"
          date="2 ماه پیش"
          amount="9,200 - 10,000"
        />
        <Frame
          src="/images/logo/svg/logo4.svg"
          title="اندروید دولوپر"
          city="فردیس، کرج"
          time="تمام وقت"
          date="1 ماه پیش"
          amount="9,000 - 9,300"
        />
        <div className="ourJob-right-button">
          <div className="ourJob-right-button-next">
            <ArrowForwardIcon />
            <Button title="بعدی" />
          </div>
          <div className="ourJob-right-button-previous">
            <Button title="قبلی" />
            <ArrowBackIcon />
          </div>
        </div>
      </div>
      <div className="ourJob-left">
        <div className="ourJob-left-button">
          <Button title="همه مشاغل" />
        </div>
        <div className="ourJob-left-box">
          <div className="ourJob-left-box-top">
            <img src="/images/testimonials/pic3.jpg" alt="logo" />
            <h4>
              من به تازگی شغلی را پیدا کرده ام که از طریق جاب بورد درخواست آن را
              داده ام! من در طول شغل خود از سایت همیشه استفاده می کردم.
            </h4>
            <h5>ریحانه بیوت</h5>
            <p>یزد</p>
          </div>
          <div className="ourJob-left-box-bottom">
            <h2>با رزومه ساز انلاین ما متفاوت باشید</h2>
            <div>با رزومه ساز جاب بورد کارفرمای خود را تحت تاثیر قرار دهید</div>
            <Link to="/Register">
              <Button title="ایجاد حساب کاربری" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurJob;

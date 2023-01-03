import React from "react";
import "./AboutUs.css";
import ButtonTwo from "../ButtonTwo/ButtonTwo";
import Card from "../Card/Card";
import LandingCount from "../LandingCount/LandingCount";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import SatelliteAltOutlinedIcon from "@mui/icons-material/SatelliteAltOutlined";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";

import HistoryEduOutlinedIcon from "@mui/icons-material/HistoryEduOutlined";

function AboutUs() {
  return (
    <div>
      <div className="aboutUs">
        <div className="aboutUs-top">
          <div className="aboutUs-right">
            <h2>دسته های محبوب</h2>
            <span>بیش از 20 دسته شغل</span>
          </div>
          <div className="aboutUs-left">
            <div className="aboutUs-left-item">
              <LandingCount counts={1881} />
              <span>شغل ارسال شده</span>
            </div>
            <div className="aboutUs-left-item">
              <LandingCount counts={3215} />
              <span>وظالیف ارسال شده</span>
            </div>
            <div className="aboutUs-left-item">
              <LandingCount counts={2108} />
              <span>فریلنسر</span>
            </div>
          </div>
        </div>
        <div className="aboutUs-card">
          <Card
            icon=<DesignServicesOutlinedIcon />
            link="طراحی، هنر و رسانه"
            text="39 موقعیت شغلی"
          />
          <Card
            icon=<HistoryEduOutlinedIcon />
            link="آموزش"
            text="62 موقعیت شغلی"
          />
          <Card
            icon=<AccountBalanceWalletIcon />
            link="حسابداری / مالی"
            text="46 موقعیت شغلی"
          />
          <Card
            icon=<ContactsOutlinedIcon />
            link="مدیریت منابع انسانی"
            text="11 موقعیت شغلی"
          />
          <Card
            icon=<SatelliteAltOutlinedIcon />
            link="مخابرات"
            text="55 موقعیت شغلی"
          />
          <Card
            icon=<RestaurantMenuOutlinedIcon />
            link="رستوران"
            text="27 موقعیت شغلی"
          />
          <Card
            icon=<BusinessOutlinedIcon />
            link="ساختمانی / ساخت و ساز"
            text="81 موقعیت شغلی"
          />
          <Card
            icon=<HealthAndSafetyOutlinedIcon />
            link="سلامت"
            text="22 موقعیت شغلی"
          />
        </div>
        <div className="aboutUs-button">
          <ButtonTwo title="همه دسته ها" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

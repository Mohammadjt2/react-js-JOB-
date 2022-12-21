import React from "react";
import "./Content.css";
import Button from "../Button/Button";
import Typewriter from "typewriter-effect";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

function Content() {
  return (
    <>
      <div className="content-background"></div>
      <div className="content">
        <Button title="مشاغل، فرصت های شغلی و استخدامی" />
        <h2 className="content-form-title">
          شغل خود را بین
          <br /> <span>50,000</span>شغل انتخاب کنید.
        </h2>
        <form className="content-form" action="#">
          <div className="content-form-input">
            <div className="content-icon">
              <input type="text" placeholder="عنوان شغل" />
              <WorkIcon />
            </div>
            <div className="content-icon">
              <input type="text" placeholder="نوع همکاری" />
              <WorkHistoryIcon />
            </div>
            <div className="content-icon">
              <input type="text" placeholder="استان" />
              <LocationOnIcon />
            </div>
          </div>
          <div className="content-form-button">
            <Button title="جستجو" />
          </div>
        </form>
        <div className="content-text">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("۲۵,۴۸۶ آگهی استخدام فعال در ۹,۳۰۳ شرکت ایرانی")
                .start()
                .pauseFor(2500)
                .deleteAll()
                .typeString(
                  "سامانه کاریابی آنلاین با بیشترین تعداد آگهی استخدام در ایران"
                )
                .start()
                .pauseFor(2500);
            }}
            options={{
              loop: true,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Content;

import React from "react";
import "./CallToAction.css";
import CardCity from "../CardCity/CardCity";
import ButtonTwo from "../ButtonTwo/ButtonTwo";

function CallToAction() {
  return (
    <div className="callToAction">
      <div className="callToAction-header">
        <h2 className="callToAction-title">شهرهای تحت پوشش</h2>
        <span className="callToAction-text">تعداد موقعیت شغلی</span>
      </div>
      <div className="callToAction-city">
        <CardCity
          src="/images/city/pic1.jpg"
          city="تهران"
          job="20 موقعیت شغلی"
        />
        <CardCity
          src="/images/city/pic2.jpg"
          city="البرز"
          job="26 موقعیت شغلی"
        />
        <CardCity
          src="/images/city/pic3.jpg"
          city="همدان"
          job="11 موقعیت شغلی"
        />
        <CardCity
          src="/images/city/pic4.jpg"
          city="اصفهان"
          job="41 موقعیت شغلی"
        />
        <CardCity
          src="/images/city/pic5.jpg"
          city="شیراز"
          job="16 موقعیت شغلی"
        />
        <CardCity
          src="/images/city/pic6.jpg"
          city="تبریز"
          job="22 موقعیت شغلی"
        />
        <CardCity
          src="/images/city/pic7.jpg"
          city="ارومیه"
          job="35 موقعیت شغلی"
        />
        <CardCity
          src="/images/city/pic8.jpg"
          city="مشهد"
          job="39 موقعیت شغلی"
        />
        <CardCity
          src="/images/city/pic9.jpg"
          city="زنجان"
          job="51 موقعیت شغلی"
        />
        <CardCity
          src="/images/city/pic10.jpg"
          city="یزد"
          job="42 موقعیت شغلی"
        />
      </div>
    </div>
  );
}

export default CallToAction;

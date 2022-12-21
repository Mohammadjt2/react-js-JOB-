import React from "react";
import Content from "./../../Components/Content/Content";
import NavBar from "./../../Components/NavBar/NavBar";
import AboutUs from "./../../Components/AboutUs/AboutUs";
import CallToAction from "./../../Components/CallToAction/CallToAction";
import OurJob from "./../../Components/OurJob/OurJob";
import CallToActionTow from "./../../Components/CallToActionTow/CallToActionTow";
import OurLatestBlog from "./../../Components/OurLatestBlog/OurLatestBlog";
import Footer from "./../../Components/Footer/Footer";

function Index() {
  return (
    <>
      <NavBar />
      <Content />
      <AboutUs />
      <CallToAction />
      <OurJob />
      <CallToActionTow />
      <OurLatestBlog />
      <Footer />
    </>
  );
}

export default Index;

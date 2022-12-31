import React from "react";
import { Link } from "react-router-dom";
import "./Page404.css";
import Button from "../../Components/Button/Button";

function Page404() {
  return (
    <div className="page404">
      <div className="page404-container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className="four-zero-four-bg">
                <h1 className="text-center">404</h1>
              </div>
              <div className="contant-box-404">
                <h3 className="h2">انگار گم شدی!!!</h3>
                <p>صفحه مورد نظر شما در دسترس نیست</p>
                <Link to="/">
                  <Button title="صفحه اصلی" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page404;

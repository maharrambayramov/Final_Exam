import React from "react";
import "./Footer.css";
import {
  DribbbleOutlined,
  BehanceOutlined,
  FacebookOutlined,
  HeartOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Helmet } from "react-helmet";

const Footer = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Footer</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="footer">
        <div className="upf">
          <div className="upleft">
            <h3>Top Products</h3>
            <ul className="upflist">
              <li>Managed Website</li>
              <li>Manage Reputation</li>
              <li>Power Tools</li>
              <li>Marketing Service</li>
            </ul>
          </div>
          <div className="upcenter">
            <h3>Newsletter</h3>
            <p className="upfp">
              You can trust us. we only send promo offers, not a single spam.
            </p>
            <div className="upinput">
              <input
                type="text"
                name=""
                id=""
                placeholder="ENTER EMAIL"
                className="inputup"
              />
              <button className="upbtn">SUBCRIBE</button>
            </div>
          </div>
          <div className="upright">
            <h3>Instragram Feed</h3>
            <div className="upimg">
              <img
                src="https://preview.colorlib.com/theme/robotics/img/i1.jpg"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/robotics/img/i2.jpg"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/robotics/img/i3.jpg"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/robotics/img/i4.jpg"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/robotics/img/i5.jpg"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/robotics/img/i6.jpg"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/robotics/img/i7.jpg"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/robotics/img/i8.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="downf">
          <p className="downp">
            Copyright ©2023 All rights reserved | This template is made with
            <HeartOutlined className="heart" /> by Colorlib
          </p>
          <div className="downicons">
            <FacebookOutlined className="downicon" />
            <TwitterOutlined className="downicon" />
            <DribbbleOutlined className="downicon" />
            <BehanceOutlined className="downicon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

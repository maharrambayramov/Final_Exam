import React, { useEffect, useState } from "react";
import "./css/Home.css";
import { Card } from "antd";
import axios from "axios";
import { Helmet } from "react-helmet";
const { Meta } = Card;

const Home = () => {
  const [product, setProduct] = useState([]);
  const getProduct = async () => {
    const res = await axios.get("http://localhost:5050/robots");
    setProduct(res.data);
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="section1">
        <div className="shead">
          <h1>Improved Production level with Robotics</h1>
          <p>EVERYONE WANTS THE INNOVATION THROUGH ROBOTICS</p>
          <div className="btns1">
            <button className="sbtn">View Details</button>
          </div>
        </div>

        <img
          src="https://preview.colorlib.com/theme/robotics/img/banner-img.png"
          alt=""
        />
      </div>
      <div className="section2">
        <div className="s2head">
          <h2>Featured Robotics Products to Show</h2>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="robots">
          {product.map((e) => (
            <Card
              className="robotcar"
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt="example" src={e.image} />}
            >
              <Meta title={e.name} description={e.title} />
            </Card>
          ))}
        </div>
      </div>
      <div className="section3">
        <div className="s3">
          <h1 className="s3h">Some Features that Made us Unique</h1>
          <p className="s3p">
            Who are in extremely love with eco friendly system.
          </p>
        </div>
        <div className="cardes">
          <div className="carde">
            <div className="cardes-icon">
              <h4>Expert Technicians</h4>
            </div>
            <p className="cardp">
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>
          <div className="carde">
            <div className="cardes-icon">
              <h4>Expert Technicians</h4>
            </div>
            <p className="cardp">
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>{" "}
          <div className="carde">
            <div className="cardes-icon">
              <h4>Expert Technicians</h4>
            </div>
            <p className="cardp">
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>{" "}
          <div className="carde">
            <div className="cardes-icon">
              <h4>Expert Technicians</h4>
            </div>
            <p className="cardp">
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>{" "}
          <div className="carde">
            <div className="cardes-icon">
              <h4>Expert Technicians</h4>
            </div>
            <p className="cardp">
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>{" "}
          <div className="carde">
            <div className="cardes-icon">
              <h4>Expert Technicians</h4>
            </div>
            <p className="cardp">
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>
        </div>
      </div>
      <div className="section4">
        <h2>Latest News from our Blog</h2>
        <p>Who are in extremely love with eco friendly system.</p>
        <div className="s4">
          <div className="last">
            <img
              src="https://preview.colorlib.com/theme/robotics/img/b1.jpg"
              alt=""
            />
            <div className="button"></div>
            <h3> Portable latest Fashion for young women</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <p className="time">31st January, 2018</p>
          </div>
          <div className="last">
            <img
              src="https://preview.colorlib.com/theme/robotics/img/b2.jpg"
              alt=""
            />
            <div className="button"></div>
            <h3>Portable latest Fashion for young women</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <p className="time">31st January, 2018</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

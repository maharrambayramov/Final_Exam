import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./css/DetailPage.css";

const DetailPage = () => {
  const [post, setPost] = useState("");
  const params = useParams();

  const getPost = async () => {
    const result = await axios.get(`http://localhost:5050/robots/${params.id}`);
    console.log(result.data);
    setPost(result.data);
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <div className="detail">
      <Helmet>
        <meta charSet="utf-8" />
        <title>DetailPage</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="page">
        <img src={post.image} alt="" />
      </div>
      <div className="hea">
        <h6>{post.name}</h6>
        <p>{post.title}</p>
      </div>
    </div>
  );
};

export default DetailPage;

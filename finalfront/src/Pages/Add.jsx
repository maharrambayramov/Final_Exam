import React, { useState, useEffect } from "react";
import { RobotsAdd } from "../Schema/RobotsAdd";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Helmet } from "react-helmet";
const Add = () => {
  const [plan, setPlan] = useState([]);

  const { register, handleSubmit, getValues } = useForm({
    resolver: yupResolver(RobotsAdd),
  });

  const getPlan = async () => {
    const res = await axios.get("http://localhost:5050/plan");
    setPlan(res.data);
  };

  const postPlan = async () => {
    const values = getValues();
    await axios.post("http://localhost:5050/plan", {
      Image: values.Image,
      Title: values.Title,
      Description: values.Description,
    });
    getPlan();
  };

  useEffect(() => {
    getPlan();
  }, []);
  return (
    <div className="add">
       <Helmet>
                <meta charSet="utf-8" />
                <title>Add</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <h3>Let's go! Add</h3>
      <div className="form">
        <form action="" onSubmit={handleSubmit(postPlan)}>
          <label htmlFor="">Image</label>
          <input type="text" {...register("Image")} />
          <label htmlFor="">Title</label>
          <input type="text" {...register("Title")} />
          <label htmlFor="">Description</label>
          <input type="text" {...register("Description")} />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Add;

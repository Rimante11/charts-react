import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/posts";

const FirstRequest = () => {
  //using try and catch för errors
  const fetchData = async () => {
    try {
      const response = await axios(url);
      console.log("My response", response);
      const data = response.data;
      console.log("Response data", data);
    } catch (error) {
      console.log("Error: ", error.response);
    }
  };

  useEffect(() => {
    //inwoke data
    fetchData();
  }, []);

  return (
    <div>
      <h3>First request</h3>
    </div>
  );
};

export default FirstRequest;

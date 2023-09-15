import React, { useEffect, useState } from "react";

function Example1(props) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, []);
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("items"));
    console.log(products);
  }, []);
  return <div></div>;
}

export default Example1;

import React, { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);

  const handleFetch = () => {
    fetchData();
  };

  const fetchData = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  // const fetchData = async () => {
  //   try {
  //     let response = await fetch("https://jsonplaceholder.typicode.com/users");
  //     let jsonData = await response.json();
  //     setData(jsonData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // fetchData();
  // }, []);

  console.log("....", data);
  return (
    <>
      <button onClick={handleFetch}>FETCH</button>
      {data?.map((el) => (
        <ul>
          <li key={el.id}>{el.name}</li>
        </ul>
      ))}
    </>
  );
}
//next click add 10 more list previous
//next click add again 10 click

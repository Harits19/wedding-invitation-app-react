"use client";

import axios from "axios";
import Cover from "./components/cover";
import Main from "./main/page";


/* 
TODO 

- enable eslint
- implement create wedding
- implement update wedding

*/

export default function Base() {
  const getListGreeting = async () => {
    try {
      console.log("start fetch");
      const result = await axios.get("api/migrate");
      console.log("result", result);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <Cover>
      <Main />
    </Cover>
  );
}

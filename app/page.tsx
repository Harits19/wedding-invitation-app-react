"use client";

import axios from "axios";
import Cover from "./components/cover";
import Main from "./main/page";

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
      <button
        onClick={() => {
          console.log("onClick");
          getListGreeting();
        }}
      >
        testing get
      </button>
      <Main />
    </Cover>
  );
}

"use client";

import Cover from "./components/cover";
import Main from "./main/page";

/* 
TODO 

- enable eslint
- implement create wedding
- implement update wedding

*/

export default function Base() {
  return (
    <Cover>
      <Main />
    </Cover>
  );
}

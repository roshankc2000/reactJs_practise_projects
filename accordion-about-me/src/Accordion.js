import React, { useState } from "react";
import { questions } from "./MyDATA";

const Accordian = () => {
  const [data, nextData] = useState(questions);

  return (
    <>
      {data.map((element) => {
        return "<Myaccordian />";
      })}
    </>
  );
};

export default Accordian;

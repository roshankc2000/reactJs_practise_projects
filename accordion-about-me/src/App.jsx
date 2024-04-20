import React, { useState } from "react";
import { questions } from "./MyDATA";
import Myaccordian from "./Myaccordion";

const App = () => {
  const [data, nextData] = useState(questions);

  return (
    <>
      <section className="main-div">
        <h1>About Me</h1>
        {data.map((element) => {
          const { id } = element;
          return <Myaccordian key={id} {...element} />;
        })}
      </section>
    </>
  );
};

export default App;

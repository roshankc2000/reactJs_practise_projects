import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";

const App = () => {
  return (
    <div className="App">
      <Header />
      <CreateNote />
      <Footer />
    </div>
  );
};

export default App;

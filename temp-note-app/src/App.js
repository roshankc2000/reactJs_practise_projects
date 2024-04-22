import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Notes from "./Notes";

const App = () => {
  return (
    <div className="App">
      <Header />
      <CreateNote />
      <Notes />
      <Footer />
    </div>
  );
};

export default App;

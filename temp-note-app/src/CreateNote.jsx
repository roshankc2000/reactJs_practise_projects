import React from "react";

const CreateNote = () => {
  return (
    <div className="main_note">
      <form>
        <input type="text" placeholder="Title" />
        <textarea rows="" column="" placeholder="Write here" />
        <button>Submit 👍</button>
      </form>
    </div>
  );
};

export default CreateNote;

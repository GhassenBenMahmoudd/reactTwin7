import React from "react";
import Events from "./Components/Events";
import "bootstrap/dist/css/bootstrap.min.css";
import NotesManager from "./Components/NotesManager";

const App = () => {
  return (
    <div className="App">
       <NotesManager initialNotes={[12, 15, 8]} />
    </div>
  );
};

export default App;

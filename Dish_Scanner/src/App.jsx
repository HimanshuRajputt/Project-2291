import React from "react";
import Home from "./Home";
import Edit from "./Edit";
import { Route,Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/edit" element={<Edit/>}/>
      </Routes>
    </>
  );
}

export default App;

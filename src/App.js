import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginFrom";
import RandomNumber from "./components/RandomNumber";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="/randomnumber" element={<RandomNumber />}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;

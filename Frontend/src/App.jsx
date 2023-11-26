import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentLIstPage from "./pages/StudentLIstPage";
import StudentRegister from "./pages/StudentRegister";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentLIstPage />} />
        <Route path="/registration" element={<StudentRegister />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

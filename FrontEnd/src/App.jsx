import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Pages/Home/Home";
import Login from "./Component/Pages/Login";
import Register from "./Component/Pages/Register";

function App() {
  const location = useLocation();

  return (
    <>
      {!["/Login", "/Register"].includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

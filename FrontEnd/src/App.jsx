import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Pages/Home/Home";
import Login from "./Component/Pages/Login";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/Login" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

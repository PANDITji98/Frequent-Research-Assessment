import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp";
import Info from "./pages/Info";
import BKG from "../src/assets/images/BKG.jpg";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${BKG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Routes>
        <Route path="/" element={<SignUp />} exact />
        <Route path="/displayInfo/:email" element={<Info />} exact />
      </Routes>
    </div>
  );
}

export default App;

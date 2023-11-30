import "./App.css";
import { View } from "./views/view";
import { Home } from "./views/Home";
import { About } from "./views/About";
import { Header } from "./views/Header";
import { Dashboard } from "./views/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<View />}></Route>
          <Route path="/Home" element={<Home />}>
          </Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Header" element={<Header />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

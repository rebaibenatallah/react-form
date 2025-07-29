import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./style/style.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Data from "./pages/Data";
import Insert from "./pages/Insert";
import Update from "./pages/Update";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" Component={Data} />
          <Route exact path="/insert" Component={Insert} />
          <Route exact path="/update/:id" Component={Update} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

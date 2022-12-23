import { useState } from "react";
import { createContext } from "react";
import { IShowData } from "../src/types";
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DroneInfo from "./components/DroneInfo";
import About from "./components/About";

export const ShowDataContext = createContext<IShowData | null>(null);

function App() {
  const [showMore, setShowMore] = useState(false);

  return (
    <ShowDataContext.Provider value={{ showMore, setShowMore }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<DroneInfo />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ShowDataContext.Provider>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Navbar from "./partials/Nav";
import Footer from "./partials/Footer";
import Home from "./poems/Home";
import About from "./About";
import Create from "./poems/Create";
import Details from "./poems/Details";
import { Suspense } from "react";

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="loading">Loading...🔃</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/poems" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/poems/:id" element={<Details />} />
          <Route exact path="/create" element={<Create />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;

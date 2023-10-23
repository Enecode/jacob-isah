import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Projects from './Components/Project/Projects';
import Youtube from './Components/Youtube/Youtube';
import Article from './Components/Articles/Article';

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/article" element={<Article />} />
      </Routes>   </Router>   
    // <Router>
    //   <Header />
    //   <Home />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/project" element={<Projects />} />
    //     <Route path="/youtube" element={<Youtube />} />
    //     <Route path="/article" element={<Article />} />
    //   </Routes>
    // </Router>
  );
}

export default App;

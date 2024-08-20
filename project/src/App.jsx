import React from "react";
import Home from "./page/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    
       </Router>

    </>
  )
}

export default App
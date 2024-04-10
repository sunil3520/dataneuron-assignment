import React from 'react'
import NavBar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParentComponent from './components/First_task/ParentComponent';
import SecondTask from "./components/Secondtask/SecondTask"
const AllRoutes = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<ParentComponent />}></Route>
          <Route path="/resize" element={<ParentComponent />}></Route>
          <Route path="/crud" element={<SecondTask />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default AllRoutes
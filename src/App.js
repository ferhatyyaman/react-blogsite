import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Create from "./components/Create";
import Blogdetails from "./components/Blogdetails";
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
   
      <div className="App">
        <Navbar/>
      <div className="content">
      
      <Routes>
      <Route path="/"  element={<Home/>}></Route>
      <Route path="/Create"  element={<Create/>}></Route>
      <Route path="/blogs/:id"  element={<Blogdetails/>}></Route>
         
      </Routes>
      </div>
</div>
    
  );
}



export default App;

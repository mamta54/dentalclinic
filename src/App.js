import './App.css';
import Sidebar from './compnonets/Sidebar/Sidebar';
import AddPatient from './compnonets/Content/Patient/AddPatient/AddPatient';
import React, { useState, useEffect,useMemo } from "react";
function App() {
  return (
     <div className="AppContainer">    
    <Sidebar/>   
   <AddPatient/>
     </div>
    
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Sidebar from './compnonets/Sidebar/Sidebar';
import D from './compnonets/Sidebar/D';
import AddPatient from './compnonets/Content/Patient/AddPatient/AddPatient';

function App() {
  return (
    // <div className="App">
     <div className="AppContainer">
     {/* <Sidebar/> */}
    <D/>
    
   <AddPatient/>
     </div>
    // </div>
  );
}

export default App;

import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Avaleht from "./pages/Avaleht";
import Ostukorv from "./pages/Ostukorv";

function App() {
  return (
    <div className="App">
      <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt="NOBE car" />
        <button className="nupu-css">NUPP</button>


      <Routes>
        <Route path='' element={<Avaleht /> } />

        <Route path='ostukorv' element={ <Ostukorv />} />
      </Routes>
    
    </div>
  );
}

export default App;

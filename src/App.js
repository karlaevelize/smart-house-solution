import './App.css';
import { Route, Routes } from "react-router-dom"
import house from "./house.png"
import Navbar from './components/Navbar';
import SmartHouse from './components/SmartHouse';
import Login from './components/Login';
import SignUp from './components/SignUp';


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<SmartHouse/>} />
    </Routes>
      <img style={{width: 200, marginLeft: 1000}} src={house}/>    
    </>
  )
}

export default App;

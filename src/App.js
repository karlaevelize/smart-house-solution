import './App.css';
import house from "./house.png"
import SmartHouse from './components/SmartHouse';

function App() {

  return (
    <>
      <SmartHouse/>
      <img style={{width: 200, marginLeft: 1000}} src={house}/>
    </>
  )
}

export default App;

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectLamps, selectRadio, selectThermostat } from "../store/house/selector"
import { selectToken } from "../store/user/selectors"
import { lampControl, radioControl, genreControl, thermostatControl } from "../store/house/actions"
import { fetchHouse } from "../store/house/actions"
import Consumption from "./Consumption"

export default function SmartHouse(){

  const genres = [ "jazz", "pop", "classical music", "classic rock" ]

  const lamps = useSelector(selectLamps)
  const radio = useSelector(selectRadio)
  const thermostat = useSelector(selectThermostat)
  const token = useSelector(selectToken)

  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate("/login")
    }
  }, [token])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHouse)
  }, [])

  return(
    <div className="mainContainer">
      <h1>House Controls</h1>
      <Consumption/>
      <h2 className="titleControl">Lamps</h2>
      <div className="mapContainer">
        {lamps.map(lamp => 
          <div className="lampsContainer" key={lamp.id} onClick={() => dispatch(lampControl(lamp.id))}>
            {lamp.power ? "✅" : "❌" }
          </div>
        )}
      </div>
      <h2 className="titleControl">Radio</h2>
      Genre: {radio.genre} <button onClick={() => dispatch(radioControl())}>{radio.power ? "Turn off" : "Start playing"}</button>
      <p>Change station:</p>
      <select onChange={(e) => { dispatch(genreControl(e.target.value)) }}>
        <option>---</option>
        {genres.map(genre => 
          <option key={genre} value={genre}>{genre}</option>
        )}
      </select>
      <h2 className="titleControl">Thermostat</h2>
      Current: {thermostat} <input type="range" min="15" max="25" step="1" value={thermostat} onChange={(e) => dispatch(thermostatControl(parseInt(e.target.value)))} />
    </div>
  )
}
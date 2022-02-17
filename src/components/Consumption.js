import { useSelector } from "react-redux"
import { selectState } from "../store/house/selector"
import { calculateTotalConsumption } from "../functions"

export default function Consumption(){

  const state = useSelector(selectState)
  const totalConsumption = calculateTotalConsumption(state)

  const consumptionColor = totalConsumption <= 50 
    ? "#4CAF50" 
    : totalConsumption > 50 && totalConsumption <= 75
    ? "orange"
    : "tomato"

  return(
    <div>
      <h2>Total consumption: <span style={{color: consumptionColor }} className="consumption">{totalConsumption} PU</span></h2>
      <p className="limitWarning">{totalConsumption >= 90 && totalConsumption <  100 && "You are close to your PU limit"  }</p>
      <p className="limitWarning">{totalConsumption >= 100 && "You've reached your PU limit"  }</p>
    </div>
  )
}
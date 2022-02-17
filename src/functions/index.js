export const calculateTotalConsumption = (house) => {
  const lampsOn = house.lamps.filter(lamp => lamp.power)
  const radioOn = house.radio.power ? 25 : 0
  const thermostatOn = house.thermostat - 20 > 0 
    ? (house.thermostat - 20) * 10
    : 0
  
  const totalConsumption = 25 * lampsOn.length + radioOn + thermostatOn
  return totalConsumption
}
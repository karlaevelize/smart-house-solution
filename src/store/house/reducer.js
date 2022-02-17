import { calculateTotalConsumption } from "../../functions";

const initialState = {
  lamps: [
    { id: 1, power: false },
    { id: 2, power: true },
    { id: 3, power: false },
    { id: 4, power: true }],
  radio: { genre: "classic rock", power: false },
  thermostat: 20,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "house/lampControl": {

      const updatedLamps = state.lamps.map(lamp => {
        return lamp.id === action.payload
          ? { ...lamp, power: !lamp.power }
          : lamp
      })

      const calculatedState = {
        ...state,
        lamps: updatedLamps
      }

      const newTotalConsumption = calculateTotalConsumption(calculatedState)

      const numberOfLampsOn = updatedLamps.filter(lamp => lamp.power)

      if (numberOfLampsOn.length === 0) {
        return {
          ...state,
          lamps: updatedLamps,
          radio: { ...state.radio, power: false },
          thermostat: 20
        }
      } else if (newTotalConsumption <= 100){
        return calculatedState
      } else {
        return {
          ...state
        }
      }
    }
    case "house/radioControl": {
      const calculatedState = {
        ...state,
        radio: { ...state.radio, power: !state.radio.power}
      }

      const newTotalConsumption = calculateTotalConsumption(calculatedState)

      if (newTotalConsumption <= 100){
        return calculatedState
      } else {
        return {
          ...state
        }
      }
    }
    case "house/genreControl": {
      return {
        ...state,
        radio: { ...state.radio, genre: action.payload }
      }
    }
    case "house/thermostatControl": {
      const calculatedState = {
        ...state,
        thermostat: action.payload
      }

      const newTotalConsumption = calculateTotalConsumption(calculatedState)

      if (newTotalConsumption <= 100){
        return calculatedState
      } else {
        return {
          ...state
        }
      }
    }
    default: {
      return state;
    }
  }
}
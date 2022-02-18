import axios from "axios"

const URL = "https://redux-assessement.herokuapp.com"


export const lampControl = (id) => {
  return {
    type: "house/lampControl",
    payload: id
  }
}

export const radioControl = () => {
  return {
    type: "house/radioControl"
  }
}

export const genreControl = (genre) => {
  return {
    type: "house/genreControl",
    payload: genre
  }
}

export const thermostatControl = (temperature) => {
  return {
    type: "house/thermostatControl",
    payload: temperature
  }
}

export const house = (data) => {
  return {
    type: "house",
    payload: data
  }
}

export const fetchHouse = async (dispatch, getState) => {

  const token = getState().user.token
  console.log("action token", token)
  const response = await axios.get(`${URL}/house`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
  })

  console.log("house", response)
  dispatch(house(response.data))
}

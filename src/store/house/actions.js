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

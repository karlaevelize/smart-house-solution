import axios from "axios"

const URL = "https://redux-assessement.herokuapp.com"

export const authSuccess = (data) => {
  return {
    type: "user/auth",
    payload: data
  }
}

export function login(username, password){
  return async function thunk(dispatch, getState){
    const response = await axios.post(`${URL}/auth/login`, { username, password})
    console.log(response)
    const token =  response.data.token
    dispatch(authSuccess({ username, token }))
  }
}

export function signUp(username, password){
  return async function thunk(dispatch, getState){
    const response = await axios.post(`${URL}/auth/signup`, { username, password})
    console.log(response)
    dispatch(authSuccess({ }))
  }
}
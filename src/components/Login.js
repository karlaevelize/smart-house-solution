import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login } from "../store/user/actions"
import { selectToken } from "../store/user/selectors"

export default function Login(){

  const navigate = useNavigate()

  const token = useSelector(selectToken)

  useEffect(() => {
    if (token) {
      navigate("/")
    }
  }, [token])

  
  const [ user, setUser ] = useState({
    username: "",
    password: ""
  })

  const dispatch = useDispatch()

  const submit = (e) => {
    e.preventDefault()
    dispatch(login(user.username, user.password))
  }

  return(
    <div className="mainContainer">
      <h1 style={{marginTop: 70}}>Login</h1>
      <form onSubmit={submit}>
        <input 
          placeholder="username" 
          className="loginInput" 
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, username: e.target.value})}
        />
        <br/>
        <input 
          placeholder="password" 
          className="loginInput" 
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value})}
        />
        <br/>
        <button style={{marginTop: 20}} type="submit">Submit Form</button>
      </form>
    </div>
  )
}
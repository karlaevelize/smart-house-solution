import { useState } from "react"
import { useDispatch } from "react-redux"
import { signUp } from "../store/user/actions"

export default function SignUp(){

  const [ user, setUser ] = useState({
    username: "",
    password: ""
  })

  const dispatch = useDispatch()

  const submit = (e) => {
    e.preventDefault()
    dispatch(signUp(user.username, user.password))
  }

  return(
    <div className="mainContainer">
      <h1 style={{marginTop: 70}}>SignUp</h1>
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
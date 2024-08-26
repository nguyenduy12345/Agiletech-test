import { Link, Navigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"


import styles from './styles.module.scss'

const SignIn = () => {
  const [userName, setUserName] = useState<String>('')
  const [message, setMessage] = useState<String>()
  const [ isLogin, setIsLogin ] = useState<Boolean>(false)
  const handleLogin = async(e: any) =>{
    try {
      e.preventDefault()
      const getToken = await axios.post('https://api-test-web.agiletech.vn/auth/login',{
        username: userName
      })
      if(getToken.status === 201){
        const { accessToken } = getToken.data
        if(!accessToken){
          setMessage("Please enter your account again!")
          setIsLogin(false)
          return
        }
        setIsLogin(true)
        localStorage.setItem('ACCESS_TOKEN', JSON.stringify(accessToken))
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className={styles["sign__in"]}>
      <Link to="/home"><img src="/img/Logo.png" /></Link>
      <form>
        <h3>Sign In</h3>
        <label htmlFor="input">Username</label> <br />
        <input type="text" id="input" onChange={(e) => setUserName(e.target.value)}/> <br />
        <button onClick={handleLogin}>Sign In</button>
      </form>
      <p style={{color: 'red', fontSize: '20px', textAlign: 'center'}}>{message}</p>
      {
        isLogin && <Navigate to="/home" replace={true} />
      }
    </div>
  )
}

export default SignIn

import { Routes, Route } from "react-router-dom"


import Home from "./pages/home"
import SignIn from "./pages/signin"
import Profile from "./pages/profile"
import AuthenProvider from "./stores/auth.tsx"
import './App.css'


function App() {
  return (
    <AuthenProvider>
    <div className="app"> 
    <Routes>
      <Route path="" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </div>
    </AuthenProvider>
  )
}

export default App

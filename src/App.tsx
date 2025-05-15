import { Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import './App.css'


function App() {
  

  return (
    <>
    <div className="bg-purple-100">

     <Routes>
        <Route element={<Home/>} path="/"/>
      </Routes>
    </div>
    </>
  )
}

export default App

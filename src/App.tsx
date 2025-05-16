import { Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import './App.css'
import Layout from "./component/Layout"
import Activity from "./page/Activity"


function App() {
  

  return (
    <>
    <div className="bg-purple-100">

     <Routes>
      
        <Route element={<Layout page={Home}/>} path="/"/>
        <Route path="/activity" element={<Layout page={Activity}/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App

import { Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import './App.css'
import Layout from "./component/Layout"
import Activity from "./page/Activity"
import TaskForm from "./page/TaskForm"
import TaskView from "./page/TaskView"
import { Toaster } from "./components/ui/sonner"


function App() {
  

  return (
    <>
    <div className="bg-purple-100">

     <Routes>
      
        <Route element={<Layout page={Home}/>} path="/"/>
        <Route path="/activity" element={<Layout page={Activity}/>}/>
        <Route path="/create" element={<TaskForm/>}/>
        <Route path="/task/:taskId/edit" element={<TaskForm/>}/>
        <Route element={<Layout page={TaskView}/>} path="/task/:id"/>
      </Routes>
      <Toaster/>
    </div>
    </>
  )
}

export default App

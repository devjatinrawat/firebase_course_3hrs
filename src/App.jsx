
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import AddStudent from "./components/AddStudent"
import StudentList from "./components/StudentList"



const myRouter = createBrowserRouter([
  { path:'',Component : Dashboard , children : [
    { path : 'addStudent' , Component : AddStudent},
    { path : 'addStudent' , Component : AddStudent},
    { path : 'studentList' , Component : StudentList},
  ]},
])



function App() {


  return (
    <>
      <RouterProvider router = {myRouter}/>
    </>
  )
}

export default App

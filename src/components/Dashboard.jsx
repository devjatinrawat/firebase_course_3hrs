
import { Link, Outlet } from 'react-router-dom';



const Dashboard = () => {
  return (
    <div style={{ display : 'flex', flexDirection : 'row' ,}}>
        <div style={{ width : '20%' , backgroundColor : 'royalblue', height : '100vh'}}>
            <Link style={{ color : 'white' , display : 'block'}}>Add Student</Link>
            <Link style={{ color : 'white' , display : 'block'}}>Student List</Link>
        </div>
        <div style={{ width : '70%', height : '100vh'}}>
            <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard

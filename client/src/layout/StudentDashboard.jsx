
import { NavLink, Outlet } from 'react-router-dom'

const StudentDashboard = () => {
  return (
  <div className="bg-black text-white">
    <div className="mx-auto px-4 py-4 flex items-center justify-between ">
    <h2 className="text-xl font-bold p-4">Student Dashboard</h2>
    <nav className="flex gap-7 px-4">
      <NavLink to="class">class</NavLink>
      <NavLink to="student">student</NavLink>
       <NavLink to="subject">subject</NavLink>
    </nav>
     </div>
    <hr />
   
  <div className="p-4 bg-white text-black">
     <Outlet/>
  </div>
  
  </div>
  
)
}

export default StudentDashboard











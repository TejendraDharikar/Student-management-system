import { NavLink, Outlet } from "react-router-dom"
import Logout from "../components/logout"
import Back from "../components/Back"
import Forward from "../components/Forward"

const TeacherDashboard = () => (
  <div className="bg-black text-white">
     
    <div className="mx-auto px-4 py-4 flex items-center justify-between ">
    <h2 className=" flex text-xl font-bold p-4">Teacher Dashboard</h2>
    <nav className="flex gap-12 px-4">
      <NavLink to="teacherhome"
       className={({ isActive }) =>
            isActive
              ? "text-yellow-500"
              : "text-white "
          }>Home</NavLink>
          <NavLink
            to="student"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white "
            }
          >
            Student
          </NavLink>
      <NavLink to="teacher"
       className={({ isActive }) =>
            isActive
              ? "text-yellow-500"
              : "text-white "
          }>Teacher</NavLink>
    </nav>
   <div className="flex gap-4">
    <div className="flex gap-1">
    <Back/>
    <Forward/>
    </div>
    
     <Logout/>
   </div>
   
     </div>
    <hr />
   
  <div className="p-4 bg-white text-black">
     <Outlet/>
  </div>
  
  </div>
  
)

export default TeacherDashboard

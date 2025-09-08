import { NavLink, Outlet } from "react-router-dom"

const TeacherDashboard = () => (
  <div className="bg-black text-white">
    <div className="mx-auto px-4 py-4 flex items-center justify-between ">
    <h2 className="text-xl font-bold p-4">Teacher Panel</h2>
    <nav className="flex gap-4 px-4">
      <NavLink to="home">HOME</NavLink>
      <NavLink to="teacher">TEACHER</NavLink>
    </nav>
     </div>
    <hr />
   
  <div className="p-4 bg-white text-black">
     <Outlet/>
  </div>
  
  </div>
  
)

export default TeacherDashboard

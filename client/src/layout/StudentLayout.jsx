
import { NavLink, Outlet } from 'react-router-dom'

const StudentLayout = () => {
  return (
   <div className="mx-auto px-4 py-4 flex items-center justify-between bg-black text-white">
    <h2 className="text-xl font-bold p-4">Student Dashboard</h2>
    <nav className="flex gap-4 px-4">
      <NavLink to="class">class</NavLink>
      <NavLink to="student">student</NavLink>
       <NavLink to="subject">subject</NavLink>
    </nav>
    <hr />
    <Outlet />
  </div>
  )
}

export default StudentLayout

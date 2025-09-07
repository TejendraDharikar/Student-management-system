import { NavLink, Outlet } from "react-router-dom"

const TeacherLayout = () => (
  <div className="mx-auto px-4 py-4 flex items-center justify-between bg-black text-white ">
    <h2 className="text-xl font-bold p-4">Teacher Panel</h2>
    <nav className="flex gap-4 px-4">
      <NavLink to="home">HOME</NavLink>
      <NavLink to="teacher">TEACHER</NavLink>
    </nav>
    <hr />
    <Outlet />
  </div>
)

export default TeacherLayout

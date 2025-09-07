import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/home", label: "Home" },
  { to: "/class", label: "Class" },
  { to: "/subject", label: "Subject" },
  { to: "/teacher", label: "Teacher" },
  { to: "/student", label: "Student" }
];

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className=" mx-auto px-4 py-4 flex items-center justify-between">
      
        <h1 className="text-2xl font-bold text-gray-800">Student Management System</h1>

       
        <nav className="flex gap-6">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-200 ${
                  isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
import { IoIosLogOut } from "react-icons/io";
import {useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate=useNavigate();

const handleLogout=()=>{
 navigate("/") ;
}

  return (
    <div>
      <button onClick={handleLogout}
      className="flex items-center gap-2  text-white px-4 py-3 rounded hover:bg-red-600 border-1 border-red-600"
      ><IoIosLogOut /></button>
    </div>
  )
}

export default Logout

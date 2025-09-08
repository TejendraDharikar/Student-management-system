import { useNavigate } from "react-router-dom";
import { IoArrowForwardCircleOutline } from "react-icons/io5";


const Forward = () => {const navigate=useNavigate();
const handleBack=()=>{
  navigate(+1);
}
  return (
    <div>
       <button onClick={handleBack}
            className="flex items-center gap-2  text-white px-4 py-3 rounded hover:bg-blue-500 border-1 border-blue-500">
<IoArrowForwardCircleOutline />

      </button>
    </div>
  )
}

export default Forward

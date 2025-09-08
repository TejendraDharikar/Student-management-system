import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [error,setError]=useState("");
const navigate=useNavigate();

const handleLogin=async(e)=>{
  e.preventDefault();
 try{
  const res=await fetch("http://localhost/student-management-system/server/login.php",{
  method:"POST",
  headers:{
"Content-Type": "application/json"
  },
  body: JSON.stringify({ email, password })
  });
 
  const data=await res.json();
  if(data.success){
    const role=data.role;
    if(role==="teacher"){
      navigate("/teacherdashboard");
    }else if(role==="student"){
      navigate("/studentdashboard");
    }else{
      setError("Invalid credentials");
    }
  }
  }catch(err){
    setError("Login failed. Please try again.");
 }
};
  return (
    
   <div className="flex flex-col items-center justify-center  h-screen  bg-gradient-to-br from-indigo-900 to-gray-900
">
   
<h1 className=' text-4xl text-white  align-center text-black mb-12 mt-[-250px]'>Welcome to Student Management System 
    </h1>
    
   
    <p className='flex justify-center text-bold gaps-3 text-xl text-white mt-25'>please enter your credentials:</p>
      <form onSubmit={handleLogin} className="bg-white text-gray-800 p-8 rounded-xl shadow-lg w-96 space-y-6">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input 
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
     
    </div>

  )
}

export default Login

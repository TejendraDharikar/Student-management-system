import { createBrowserRouter, Navigate, NavLink, RouterProvider } from "react-router-dom";
import Home from "./pages/teacher/Home";
import Class from "./pages/student/Class";
import Subject from "./pages/student/Subject";

import Student from "./pages/student/Student";
import Teacher from "./pages/teacher/Teacher";
import Login from "./components/Login";
import StudentDashboard from "./layout/StudentDashboard";
import TeacherDashboard from "./layout/TeacherDashboard";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },{
    path: "/studentdashboard",
    element: <StudentDashboard />,
    children: [
      { index: true, element: <Navigate to="student" />},
      {
        path: "class",
        element: <Class />,
      },
      {
        path: "subject",
        element: <Subject />,
      },
      {
        path: "student",
        element: <Student/>,
      },
    ],
  },
  {
    path: "/teacherdashboard",
    element: <TeacherDashboard />,
    children: [
      {index:true,
        element: <Navigate to="home" />
      },
       {
        path: "home",
        element: <Home />
      },
      {
        path: "teacher",
        element: <Teacher/>,
      },
    ],
  },
]);

function App() {
  return<RouterProvider router={router} />;
}

export default App;

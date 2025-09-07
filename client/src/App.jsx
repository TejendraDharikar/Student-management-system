import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import Home from "./pages/teacher/Home";
import Class from "./pages/student/Class";
import Subject from "./pages/student/Subject";
import StudentLayout from "./layout/StudentLayout";
import TeacherLayout from "./layout/TeacherLayout";
import Student from "./pages/student/Student";
import Teacher from "./pages/teacher/Teacher";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },{
    path: "/studentlayout",
    element: <StudentLayout />,
    children: [
      { index: true, element: <StudentLayout /> },
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
    path: "/teacherlayout",
    element: <TeacherLayout />,
    children: [
      {index:true,
        path: "home",
        element: <Home />,
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

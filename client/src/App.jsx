import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Subject from "./pages/student/Subject";
import Student from "./pages/teacher/Student";
import Teacher from "./pages/teacher/Teacher";
import Login from "./components/Login";
import StudentDashboard from "./layout/StudentDashboard";
import TeacherDashboard from "./layout/TeacherDashboard";
import StudentHome from "./pages/student/StudentHome";
import TeacherHome from "./pages/teacher/TeacherHome";
import MyClass from "./pages/student/MyClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/studentdashboard",
    element: <StudentDashboard />,
    children: [
      { index: true, element: <Navigate to="studenthome" /> },
      {
        path: "studenthome",
        element: <StudentHome />,
      },
      {
        path: "myclass",
        element: <MyClass />,
      },
      {
        path: "subject",
        element: <Subject />,
      },
     
    ],
  },
  {
    path: "/teacherdashboard",
    element: <TeacherDashboard />,
    children: [
      { index: true, element: <Navigate to="teacherhome" /> },
      {
        path: "teacherhome",
        element: <TeacherHome />,
      },
       {
        path: "student",
        element: <Student />,
      },
      {
        path: "teacher",
        element: <Teacher />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

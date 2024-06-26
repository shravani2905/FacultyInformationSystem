import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RootLayout from "./Components/RootLayout/RootLayout";
import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Message from "./Components/Message/Message";
import Preview from "./Components/Preview/Preview";
import Userdashboard from "./Components/Userdashboard/Userdashboard";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import Achievements from "./Components/Achievements/Achievements";
import Basic from "./Components/Basic/Basic";
import Certifications from "./Components/Certifications/Certifications"
import Designation from "./Components/Designation/Designation"
import Fundedprojects from "./Components/Fundedprojects/Fundedprojects";
import Patents from "./Components/Patents/Patents";
import Promotions from "./Components/Promotions/Promotions";
import Publications from "./Components/Publications/Publications";
import Qualification from "./Components/Qualification/Qualification";
import FacultyData from "./Components/FacultyData/FacultyData"
import FacultyStatistics from "./Components/FacultyStatistics/FacultyStatistics";
import "./App.css";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "signin",
          element: <Login />,
        },
        {
          path: "user-dashboard",
          element: <Userdashboard />,
          children: [
            {
              path: "",
              element: <Basic />,
            },
            {
              path: "achievements",
              element: <Achievements />,
            },
            {
              path: "basic",
              element: <Basic />,
            },
            {
              path: "certifications",
              element: <Certifications />,
            },
            {
              path: "designation",
              element: <Designation />,
            },
            {
              path: "funded-projects",
              element: <Fundedprojects />,
            },
            {
              path: "patents",
              element: <Patents />,
            },
            {
              path: "promotions",
              element: <Promotions />,
            },
            {
              path: "publications",
              element: <Publications />,
            },
            {
              path: "qualification",
              element: <Qualification />,
            },
            {
              path:"preview/:id",
              element:<Preview/>
            }
          ],
        },
        {
          path: "admin-dashboard",
          element: <AdminDashboard />,
        },
        {
          path: "faculty-data",
          element: < FacultyData/>,
        },
        {
          path: "faculty-statistics",
          element: <FacultyStatistics />,
        },
        {
          path: "message/:id",
          element: <Message />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { StudentCard } from "./components/student/StudentCard";
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";

const SelectedStudentCard = () => {
  const location = useLocation();
  const student = location.state?.student;

  return (
    <StudentCard
      id={student?.id || 1}
      name={student?.name || ""}
      age={student?.age || 1}
      phone={student?.phone || ""}
      email={student?.email || ""}
      removeElement={() => console.log("")}
    />
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/student",
    element: <SelectedStudentCard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
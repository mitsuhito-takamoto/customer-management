import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { MainLayout } from "../components/layout/MainLayout";
import { LoginPage } from "../pages/auth/LoginPage";
import { DashboardPage } from "../pages/dashboard/DashboardPage";
import { CustomerListPage } from "../pages/customers/CustomerListPage";
import { CustomerDetailPage } from "../pages/customers/CustomerDetailPage";
import { CustomerCreatePage } from "../pages/customers/CustomerCreatePage";
import { CustomerEditPage } from "../pages/customers/CustomerEditPage";
import { ProjectListPage } from "../pages/projects/ProjectListPage";
import { ProjectDetailPage } from "../pages/projects/ProjectDetailPage";
import { ProjectCreatePage } from "../pages/projects/ProjectCreatePage";
import { ProjectEditPage } from "../pages/projects/ProjectEditPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <LoginPage /> },
      {
        path: "/",
        element: <MainLayout />,
        children: [
          { index: true, element: <DashboardPage /> },
          { path: "customers", element: <CustomerListPage /> },
          { path: "customers/new", element: <CustomerCreatePage /> },
          { path: "customers/:id", element: <CustomerDetailPage /> },
          { path: "customers/:id/edit", element: <CustomerEditPage /> },
          { path: "projects", element: <ProjectListPage /> },
          { path: "projects/new", element: <ProjectCreatePage /> },
          { path: "projects/:id", element: <ProjectDetailPage /> },
          { path: "projects/:id/edit", element: <ProjectEditPage /> }
        ]
      }
    ]
  }
]);

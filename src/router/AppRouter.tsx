import { Navigate, Route, Routes } from "react-router";
import type { PropsWithChildren } from "react";
import App from "../components/App/App";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import HomePage from "../bug/pages/HomePage/HomePage";
import ReportPage from "../bug/pages/ReportPage/ReportPage";

const AppRouter: React.FC<PropsWithChildren> = ({ children = <App /> }) => {
  return (
    <Routes>
      <Route path="/" element={children}>
        <Route index element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

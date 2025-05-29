import { Navigate, Route, Routes } from "react-router";
import type { PropsWithChildren } from "react";
import NotFoundPage from "../ui/pages/NotFoundPage/NotFoundPage";
import HomePage from "../bug/pages/HomePage/HomePage";
import ReportPage from "../bug/pages/ReportPage/ReportPage";
import DetailsPage from "../bug/pages/DetailsPage/DetailsPage";
import App from "../ui/components/App/App";
import EditPage from "../bug/pages/EditPage/EditPage";

const AppRouter: React.FC<PropsWithChildren> = ({ children = <App /> }) => {
  return (
    <Routes>
      <Route path="/" element={children}>
        <Route index element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/details/:bugId" element={<DetailsPage />} />
        <Route path="/update/:bugId" element={<EditPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

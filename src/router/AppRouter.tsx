import { Navigate, Route, Routes } from "react-router";
import type { PropsWithChildren } from "react";
import App from "../ui/components/App/App";
import {
  LazyDetailsPage,
  LazyEditPage,
  LazyHomePage,
  LazyNotFoundPage,
  LazyReportPage,
} from "./LazyPages";

const AppRouter: React.FC<PropsWithChildren> = ({ children = <App /> }) => {
  return (
    <Routes>
      <Route path="/" element={children}>
        <Route index element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<LazyHomePage />} />
        <Route path="/report" element={<LazyReportPage />} />
        <Route path="/details/:bugId" element={<LazyDetailsPage />} />
        <Route path="/update/:bugId" element={<LazyEditPage />} />
        <Route path="*" element={<LazyNotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

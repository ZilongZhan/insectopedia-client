import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import HomePage from "../bug/pages/HomePage/HomePage";
import type { PropsWithChildren } from "react";

const AppRouter: React.FC<PropsWithChildren> = ({ children = <App /> }) => {
  return (
    <Routes>
      <Route path="/" element={children}>
        <Route index element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

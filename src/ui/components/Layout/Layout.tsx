import { Outlet } from "react-router";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Modal from "../Modal/Modal";
import useApp from "../../../hooks/useApp";

import "./Layout.css";

const Layout: React.FC = () => {
  const {
    modalConfig: { showModal, isErrorModal, message },
  } = useApp();

  return (
    <div className="container">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Navigation />
      {showModal && <Modal message={message} isErrorModal={isErrorModal} />}
    </div>
  );
};

export default Layout;

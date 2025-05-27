import type React from "react";
import Button from "../Button/Button";
import DeleteButtonSvg from "../shared/DeleteButtonSvg/DeleteButtonSvg";
import ErrorSvg from "../shared/ErrorSvg/ErrorSvg";
import useApp from "../../../hooks/useApp";

import "./Modal.css";

interface ModalProps {
  message: string;
  isErrorModal?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  message,
  isErrorModal: error = false,
}) => {
  const { modalConfig, setModalConfig } = useApp();
  const modifier = error ? " modal__message--error" : "";

  const handleCloseModal = (): void => {
    setModalConfig({ ...modalConfig, showModal: false });
  };

  return (
    <dialog open className="modal">
      <Button onClick={handleCloseModal} modifier="modal-backdrop" />
      <div className="modal__content">
        <Button
          modifier="delete"
          aria-label="Close modal"
          onClick={handleCloseModal}
        >
          <DeleteButtonSvg aria-hidden={true} />
        </Button>
        <span className={`modal__message${modifier}`}>{message}</span>
        {error && <ErrorSvg />}
      </div>
    </dialog>
  );
};

export default Modal;

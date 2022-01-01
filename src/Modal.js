import React from "react";

const Modal = ({ Modal, setModal }) => {
  return (
    <div>
      <button onClick={() => setModal(false)}>Botão Fechar</button>
    </div>
  );
};

export default Modal;

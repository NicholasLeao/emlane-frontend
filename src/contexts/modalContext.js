import { createContext, useState, useEffect } from "react";

const ModalContext = createContext("none");

function ModalContextComponent(props) {
  const [modalState, setModalState] = useState("none");
  const modalHandler = (type) => {
    if (type === modalState) return setModalState("none");
    setModalState(type);
  };

  return (
    <ModalContext.Provider value={{ modalState, modalHandler }}>
      {props.children}
    </ModalContext.Provider>
  );
}

export { ModalContext, ModalContextComponent };

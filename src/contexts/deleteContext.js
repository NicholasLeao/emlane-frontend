import { createContext, useState, useEffect } from "react";

const DeleteContext = createContext();

function DeleteContextComponent(props) {
  const [deleteState, setDeleteState] = useState(false);
  const deleteHandler = () => setDeleteState((s) => !s);

  return (
    <DeleteContext.Provider value={{ deleteState, deleteHandler }}>
      {props.children}
    </DeleteContext.Provider>
  );
}

export { DeleteContext, DeleteContextComponent };

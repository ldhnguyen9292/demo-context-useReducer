import React, { useReducer, createContext } from "react";
import ChildrenComponent from "./children";

//Initial State
const initialState = { onOff: true };

const reducer = (state, action) => {
  const { type, data } = action;
  console.log(data);
  switch (type) {
    case "CHANGE_STATUS":
      state.onOff = data;
      return { ...state };
    default:
      return state;
  }
};

//Create Store
export const StoreContent = createContext();
export const StoreUpdate = createContext();

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContent.Provider value={state}>
      <StoreUpdate.Provider value={dispatch}>{children}</StoreUpdate.Provider>
    </StoreContent.Provider>
  );
};

//Using
function App() {
  return (
    <Store>
      <ChildrenComponent />
    </Store>
  );
}

export default App;

import React, { useContext } from "react";
import { StoreContent, StoreUpdate } from "./App";
import LedOn from "./led-on.jpg";
import LedOff from "./led-off.jpg";

function Children() {
  const state = useContext(StoreContent);
  const dispatch = useContext(StoreUpdate);
  const handleChange = (event) => {
    event.preventDefault();
    return dispatch({
      type: "CHANGE_STATUS",
      data: !state.onOff,
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      {<img style={{ width: 100 }} src={state.onOff ? LedOn : LedOff}></img>}
      <form>
        <p>Bật tắt đèn</p>
        <input type="checkbox" value={state.onOff} onClick={handleChange} />
      </form>
    </div>
  );
}

export default Children;

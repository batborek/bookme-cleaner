import React, { useContext, useEffect } from "react";

import Logo from "./images/logo.png";

export const CleanRoom = () => {




  return (
    <>
      <div className="myForm">
        <img src={Logo} alt="Logo" />
        <div className="item">
         
          <section className="dropdown-update-input">
            <h2 className="newDataTitle">Clean Room</h2>
            <input
            //  onChange={(e) => setRoomNum(e.target.value)}
             // value={roomNum}
              type="number"
              id="number"
              name="number"
              className="text-input-update"
              placeholder="Room Number"
            />
            <select
              className="select-input-type"
              defaultValue="default"
            //  onChange={(e) => setRoomType(e.target.value)}
            >
              <option value="default">Type</option>
              <option value="single">Single</option>
              <option value="king-size">King Size</option>
            </select>
          
          </section>

        
          <button
            type="button"
            className="forwardButton forwardButtonUpdate"
            disabled={false}
            // onClick={() => {
            //   EditRoom();
            //   setCurrentPage(1);
            // }}
          >
            <b>Clean Room</b>
          </button>
          <button
            type="button"
            className="forwardButton3 forwardButtonBack"
            disabled={false}
            // onClick={() => {
            //   setCurrentPage(1);
            // }}
          >
            {" "}
            <b>Cancel</b>
          </button>
        </div>
      </div>
    </>
  );
};

export default CleanRoom;

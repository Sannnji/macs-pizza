import React from "react";

import breadSticks from "../../images/breadstick-pic.png";

function BStixTile() {
  return (
    <div className="custom-container">
      <img
        className="p-0 order-6 darken"
        src={breadSticks}
        alt="Macs BreadSticks"
      />
      <div className="centered w-100 p-4">
        <h4 className="font-weight-lighter innerBorder ">
          MOUTH WATERING BREADSTICKS
        </h4>
      </div>
    </div>
  );
}

export default BStixTile;

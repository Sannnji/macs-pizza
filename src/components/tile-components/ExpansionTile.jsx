import React from "react";

import expansionPic from "../../images/expansion-pic.png";

function ExpansionTile() {
  return (
    <div className="custom-container order-7">
      <img
        className="p-0 darken order-5"
        src={expansionPic}
        alt="We are covid free"
      />
      <div className="centered innerBorder w-75">
        <h4 className="font-weight-lighter">
          NEW LOCATION COMING THIS FALL
        </h4>
      </div>
    </div>
  );
}

export default ExpansionTile;

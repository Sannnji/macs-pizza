import React from "react";

import menuTile from "../../images/menu-tile.png";

function MenuTile() {
  return (
    <div className="custom-container">
      <img className="p-0 darken" src={menuTile} alt="We are covid free" />
      <div className="centered w-75">
        <h4 className="font-weight-lighter">
          "MASTER CHEF" LEVEL SPECIALTY PIZZAS
        </h4>
      </div>
    </div>
  );
}

export default MenuTile;

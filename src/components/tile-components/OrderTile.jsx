import React from "react";

import orderTile from "../../images/order-tile.png";

function OrderTile() {
  return (
    <div className="custom-container">
      <img className="p-0 darken" src={orderTile} alt="We are covid free" />
      <div className="centered">
        <h4 className="font-weight-lighter">WE ARE COVID-19 FREE!</h4>
        <a
          className="btn btn-outline-light"
          role="button"
          href="https://macspizzashack.weborder.net/"
        >
          Order Now
        </a>
      </div>
    </div>
  );
}

export default OrderTile;

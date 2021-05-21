import React from "react";

import "./MapTile.css";

import googleMaps from "../../images/google-maps.png";

function MapTile() {
  return (
    <div class="card order-8 ml-0 ml-md-4 pt-5 pt-md-0">
      <div class="row">
        <div class="col-md-6 d-flex justify-content-center">
          {/*replace image with maps api */}
          <img src={googleMaps} alt="#" />
        </div>

        <div class=" col-md-6 card-body">
          <div class="card-text">
            <h5 class="card-title">Hours</h5>
            <p>Mon-Thurs: 10:00am–10:00pm</p>
            <p>Friday: 10:00am–11:00pm</p>
            <p>Saturday: 10:00am–11:00pm</p>
            <p>Sunday: 10:00am–10:00pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapTile;

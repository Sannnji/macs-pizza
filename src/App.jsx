import React from "react";

import Navbar from "./components/Navbar";

import WelcomeTile from "./components/tile-components/WelcomeTile";
import OrderTile from "./components/tile-components/OrderTile";
import MenuTile from "./components/tile-components/MenuTile";
import BStixTile from "./components/tile-components/BStixTile";
import ExpansionTile from "./components/tile-components/ExpansionTile";
import MapTile from "./components/tile-components/MapTile";
import Footer from "./components/Footer";

import macsBanner from "./images/macs-banner.png";

function App() {
  return (
    <>
      <Navbar />
      <img
        className="w-100 order-1 d-md-none"
        src={macsBanner}
        alt="Macs Pizza Shack banner"
      />

      <div className="container-fluid">
        <div className="column">
          <img
            className="w-100 order-1 mb-4 d-none d-md-block"
            src={macsBanner}
            alt="Macs Pizza Shack banner"
          />

          <div className="row align-items-center justify-content-center">
            <div className="col-auto mt-3 mt-md-0 mb-4 order-1 order-xl-4">
              <WelcomeTile />
            </div>

            <div className="col-auto mb-4 order-2">
              <OrderTile />
            </div>

            <div className="col-auto mb-4 order-3">
              <MenuTile />
            </div>
          </div>

          <div className="row align-items-center justify-content-center">
            <div className="col-auto mb-4">
              <BStixTile />
            </div>

            <div className="col-auto mb-4">
              <ExpansionTile />
            </div>

            <div className="col-auto mb-4">
              <MapTile />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;

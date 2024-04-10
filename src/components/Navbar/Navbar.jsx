import React from "react";

import "./navbar.scss";

function Navbar() {
  return (
    <div className="container">
      <p>Buhalterinių paslaugų įmonė</p>
      <ul>
        <li>Atsiliepimai</li>
        <li>Naudinga</li>
        <li>Kontaktai</li>
        <li>Krepšelis</li>
      </ul>
    </div>
  );
}

export default Navbar;

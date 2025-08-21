import React from "react";
import Order from "./Order";

function Footer() {
  const openHour = 10;
  const closeHour = 20;
  const hour = new Date().getHours();
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're closed! Come again between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

export default Footer;

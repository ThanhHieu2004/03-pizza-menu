import React from "react";
import pizzaData from "../data";
import Pizza from "./Pizza/Pizza";
function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzaData.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone even, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Sorry, we're currently working on our menu! :)</p>
      )}
    </main>
  );
}

export default Menu;

import React from "react";
import pizzaData from "../data";
import Pizza from "./Pizza/Pizza";
function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <div className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            photoName={pizza.photoName}
          />
        ))}
      </div>
    </main>
  );
}

export default Menu;

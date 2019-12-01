import React from "react";
import { ItemCard } from "./ItemCard";

export default function FoodList() {
  const [foodItems, setFoodItems] = React.useState([]);

  async function getFoodItems() {
    const response = await fetch("http://localhost:5678/items");
    const newItems = await response.json();
    setFoodItems(newItems);
  }

  React.useEffect(() => {
    getFoodItems();
  }, []);

  return (
    <div>
      {foodItems.map(item => (
        <ItemCard
          id={item.id}
          key={item.key}
          cat={item.cat}
          what={item.what}
          date={item.date}
          kcal={item.kcal}
        />
      ))}
    </div>
  );
}

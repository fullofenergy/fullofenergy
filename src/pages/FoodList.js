import React from "react";
import styled from "@emotion/styled";

const Card = styled.div`
  background: hotpink;
  height: 120px;
  width: 80vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

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
        <Card>
          <div>{item.cat}</div>
          <div>{item.what}</div>
          <div>{item.date}</div>
          <div>{item.kcal}</div>
        </Card>
      ))}
    </div>
  );
}

import React from "react";
import styled from "@emotion/styled";

const Card = styled.div`
  background: ${props => props.theme.default.secondary};
  height: 120px;
  width: 80vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;

  margin-top: 20px;
  border-radius: 10px;
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
        <Card key={item.id}>
          <div>Category? {item.cat}</div>
          <div>What? {item.what}</div>
          <div>Date? {item.date}</div>
          <div>Kcal? {item.kcal}</div>
        </Card>
      ))}
    </div>
  );
}

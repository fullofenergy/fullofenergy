import React from "react";
import styled from "@emotion/styled";

const Card = styled.div`
  background: hotpink;
  height: 250px;
  width: 80vw;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export default function FoodList() {
  async function getFoodItems() {
    const response = await fetch("http://localhost:5678/items");
    const newItems = await response.json();
    console.log(newItems);
  }

  getFoodItems();

  return (
    <Card>
      <div>Cat</div>
      <div>What</div>
      <div>Date</div>
      <div>kcal</div>
    </Card>
  );
}

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

export function ItemCard({ id, cat, what, date, kcal }) {
  return (
    <div>
      <Card key={id} id={id}>
        <div>Category? {cat}</div>
        <div>What? {what}</div>
        <div>Date? {date}</div>
        <div>Kcal? {kcal}</div>
      </Card>
    </div>
  );
}

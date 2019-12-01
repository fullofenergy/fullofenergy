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

const DeleteButton = styled.button`
  width: 50px;
  margin: 0 auto 0 auto;
  background: ${props => props.theme.default.secondary};
  border: 2px solid white;
  border-radius: 5px;
`;

export function ItemCard({ id, cat, what, date, kcal }) {
  const [remove, setRemove] = React.useState();

  async function handleRemove() {
    await fetch(`http://localhost:5678/items/${remove}`, {
      method: "DELETE"
    });
  }

  React.useEffect(() => {
    handleRemove();
  }, [remove]);

  return (
    <div>
      <Card key={id} id={id}>
        <div>Category? {cat}</div>
        <div>What? {what}</div>
        <div>Date? {date}</div>
        <div>Kcal? {kcal}</div>
        <DeleteButton
          value={id}
          onClick={() => {
            setRemove(id);
            window.location.reload();
          }}
        >
          Delete
        </DeleteButton>
      </Card>
    </div>
  );
}

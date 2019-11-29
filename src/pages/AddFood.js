import React from "react";
import styled from "@emotion/styled";

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  justify-content: space-around;
  height: 100vh;
  width: 100vw;
`;

const Button = styled.button`
  height: 30px;
  width: 30px;
  background-color: red;
`;

export default function AddFood() {
  return (
    <Form>
      <h2>Was gab's?</h2>
      <div>
        <Button>Food</Button>
        <Button>Drink</Button>
      </div>
      <input type="text" placeholder="Was genau?"></input>
      <input type="date"></input>
      <input placeholder="kcal"></input>
      <Button>Submit</Button>
    </Form>
  );
}

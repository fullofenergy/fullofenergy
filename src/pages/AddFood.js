import React, { useState } from "react";
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
  const [what, setWhat] = useState("");
  const [date, setDate] = useState("");
  const [kcal, setKcal] = useState(null);

  console.log(what, date, kcal);

  return (
    <Form>
      <h2>Was gab's?</h2>
      <div>
        <Button>Food</Button>
        <Button>Drink</Button>
      </div>
      <input
        type="text"
        placeholder="Was genau?"
        onChange={event => setWhat(event.target.value)}
      ></input>
      <input
        type="date"
        onChange={event => setDate(event.target.value)}
      ></input>
      <input
        placeholder="kcal"
        onChange={event => setKcal(event.target.value)}
      ></input>
      <Button>Submit</Button>
    </Form>
  );
}

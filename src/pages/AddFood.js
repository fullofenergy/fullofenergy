import React, { useState } from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
  justify-content: space-around;
  height: 100vh;
  width: 100vw;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const InputField = styled.input`
  background-color: ${props => props.theme.default.secondary};
  border-radius: 5px;
  outline: none;
  border: none;
  height: 40px;
  width: 80%;
  text-align: center;
  margin: 20px;
  color: ${props => props.theme.default.highlight};
`;

const Button = styled.button`
  height: 20px;
  width: 60px;
  background-color: ${props => props.theme.default.highlight};
  border-radius: 5px;
  outline: none;
  border: none;
`;

export default function AddFood() {
  const [what, setWhat] = useState("");
  const [date, setDate] = useState("");
  const [kcal, setKcal] = useState(null);
  const [cat, setCat] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch("http://localhost:5678/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ cat, what, date, kcal })
    });

    setWhat("");
    setDate("");
    setKcal(null);
    setCat("");
    console.log(what, date, kcal, cat);
  }

  console.log(what, date, kcal, cat);
  return (
    <Form onSubmit={handleSubmit}>
      <h2>Are you #FullOfEnergy?</h2>
      <Container>
        <div>
          <input
            type="radio"
            id="food"
            name="cat"
            value="food"
            onChange={event => setCat(event.target.value)}
          />
          <label>Food</label>
        </div>
        <div>
          <input
            type="radio"
            id="drink"
            name="cat"
            value="drink"
            onChange={event => setCat(event.target.value)}
          />
          <label>Drink</label>
        </div>
      </Container>
      <InputField
        type="text"
        placeholder="What did you eat?"
        onChange={event => setWhat(event.target.value)}
      ></InputField>
      <InputField
        type="date"
        onChange={event => setDate(event.target.value)}
      ></InputField>
      <InputField
        placeholder="kcal"
        onChange={event => setKcal(event.target.value)}
      ></InputField>
      <Button>Submit</Button>
    </Form>
  );
}

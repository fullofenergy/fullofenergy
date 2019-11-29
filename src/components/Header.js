import React from "react";
import styled from "@emotion/styled";
import plus from "../assets/plus.svg";

const HeadlineContainer = styled.h1`
  background-color: #777777;
  text-align: center;
  margin: 0px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
`;

const Headline = styled.h1`
  font-size: 1.5em;
  font-family: sans-serif;
`;

const Button = styled.button`
  border: 0px solid #ffffff;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

export default function Header() {
  return (
    <>
      <HeadlineContainer>
        <Headline>#FullOfEnergy</Headline>
        <Button>
          <Image src={plus} />
        </Button>
      </HeadlineContainer>
    </>
  );
}

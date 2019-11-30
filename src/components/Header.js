import React from "react";
import styled from "@emotion/styled";
import plus from "../assets/plus.svg";
import { Link } from "react-router-dom";

const HeadlineContainer = styled.div`
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
let site = "/add";

export default function Header() {
  const [page, setPage] = React.useState(false);

  function handleClick() {
    setPage(!page);
    if (page === true) {
      site = "/add";
    } else {
      site = "/";
    }
  }

  console.log(page);
  console.log(site);
  return (
    <>
      <HeadlineContainer>
        <Headline>#FullOfEnergy</Headline>
        <Button onClick={handleClick}>
          <Link to={site}>
            <Image src={plus} />
          </Link>
        </Button>
      </HeadlineContainer>
    </>
  );
}

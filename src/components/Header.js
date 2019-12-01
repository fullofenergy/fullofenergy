import React from "react";
import styled from "@emotion/styled";
import plus from "../assets/plus.svg";
import { Link } from "react-router-dom";
import flash from "../assets/flash.svg";

const HeadlineContainer = styled.div`
  background-color: ${props => props.theme.default.background};
  text-align: center;
  margin: 0px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Headline = styled.h1`
  font-size: 1.5em;
  font-family: sans-serif;
  margin-left: 20px;
  font-family: "Quicksand", sans-serif;
  text-shadow: 3px 3px 4px #777;
`;

const Button = styled.button`
  border: 0px solid #ffffff;
  border-radius: 50px;
  width: 30px;
  height: 30px;
  margin-right: 20px;
  background-color: ${props => props.theme.default.background};
`;

const ButtonImage = styled.img`
  width: 30px;
  height: 30px;
`;

const LogoImage = styled.img`
  width: 20px;
  height: 20px;
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

  return (
    <>
      <HeadlineContainer>
        <Headline>
          #FullOfEnergy <LogoImage src={flash}></LogoImage>
        </Headline>

        <Button onClick={handleClick}>
          <Link to={site}>
            <ButtonImage src={plus} />
          </Link>
        </Button>
      </HeadlineContainer>
    </>
  );
}

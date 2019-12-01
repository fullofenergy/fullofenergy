import React from "react";
import { Global, css } from "@emotion/core";
import theme from "./utils/themes";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        body {
          background-color: ${theme.default.basic};
          margin: auto;
          padding: 0px;
          font-family: "Quicksand", sans-serif;
        }
      `}
    />
  );
}

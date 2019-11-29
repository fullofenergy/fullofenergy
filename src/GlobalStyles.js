import React from "react";
import { Global, css } from "@emotion/core";
import themes from "./utils/themes";

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
          background-color: ${themes.default.primary};
          margin: auto;
          padding: 0px;
        }
      `}
    />
  );
}

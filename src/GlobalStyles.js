import React from "react";
import { Global, css } from "@emotion/core";
import themes from "./utils/themes";
import { useTheme } from "emotion-theming";

export default function GlobalStyles() {
  const theme = useTheme();
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

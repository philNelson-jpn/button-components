import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const SIZES = {
  small: {
    "--font-size": 16 / 16 + "rem",
    "--padding": "4px 12px",
    "--border-radius": 2 + "px"
  },
  medium: {
    "--font-size": 18 / 16 + "rem",
    "--padding": "12px 20px",
    "--border-radius": 2 + "px"
  },
  large: {
    "--font-size": 21 / 16 + "rem",
    "--padding": "16px 32px",
    "--border-radius": 4 + "px"
  }
};

const Button = ({ variant, size, children }) => {
  const styles = SIZES[size];

  let Component;

  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  } else {
    Component = GhostButton;
  }

  return <Component style={styles}>{children}</Component>;
};

const ButtonBase = styled.button`
  font-size: var(--font-size);
  border: 2px solid ${COLORS.primary};
  border-radius: var(--border-radius);
  padding: var(--padding);
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-weight: 500;

  &:focus {
    outline-color: ${COLORS.primary};
    outline-offset: 4px;
  }
`;

const FillButton = styled(ButtonBase)`
  background: ${COLORS.primary};
  color: ${COLORS.white};

  &:hover{
    background: ${COLORS.primaryLight};
  }
`;

const OutlineButton = styled(ButtonBase)`
  background: ${COLORS.white};
  color: ${COLORS.primary};

  &:hover{
    background: ${COLORS.offwhite};
  }
`;

const GhostButton = styled(ButtonBase)`
  background: ${COLORS.white};
  color: ${COLORS.gray};
  border: none;

  &:focus {
    outline-color: ${COLORS.gray};
    outline-offset: 4px;
  }

  &:hover{
    background: ${COLORS.transparentGray15};
    color: ${COLORS.black};
  }
`;

export default Button;

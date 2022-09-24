import styled, { css } from "styled-components";

import { media } from "../../../utils";
import { BaseButton } from "../../Base";

const disabledButtonAttrs = ({ disabled = false }) => css`
  transition: ${disabled && "none"} !important;
  background: ${disabled && "gray"} !important;
  cursor: ${disabled && "initial"} !important;
`;

const Button = styled(BaseButton)<{ disabled?: boolean }>`
  height: 50px;
  border-radius: 25px;
  padding: 10px;
  margin: 10px 0;
  font-weight: 500;
  cursor: pointer;

  ${media.lessThan('md')`
    height: 40px;
  `}

  ${disabledButtonAttrs}
`;

const RippleButton = styled(Button)`
  outline: none;
  background-position: center;
  transition: background 0.5s;

  &:active {
    background-size: 100%;
    transition: background 0s;
  }
`;

export const PrimaryButton = styled(RippleButton)`
  color: white;
  background: var(--primary);

  &:hover {
    background: var(--primary-hover)
      radial-gradient(circle, transparent 1%, var(--primary-hover) 1%)
      center/15000%;
  }

  &:active {
    background-color: var(--primary-active);
  }
`;

export const OutlinedButton = styled(Button)`
  border: 1px solid lightgray;
  background: white;
`;

export const SuccessButton = styled(RippleButton)`
  color: white;
  background: var(--success);

  &:hover {
    background: var(--success-hover)
      radial-gradient(circle, transparent 1%, var(--success-hover) 1%)
      center/15000%;
  }

  &:active {
    background-color: var(--success-active);
  }
`;

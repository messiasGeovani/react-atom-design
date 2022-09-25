import styled, { css } from "styled-components";

import { media } from "@utils/index";
import { AnimatedDiv } from "@components/Animated";
import { BaseForm } from "@components/Base";

export const FormWrapper = styled(BaseForm)`
  width: 50%;

  ${media.lessThan("md")`
    width: 75%;
  `}
`;

const separatorLine = css`
  display: block;
  height: 1px;
  width: 140px;
  background: lightgray;
`;

export const Separator = styled(AnimatedDiv)`
  color: lightgray;
  font-size: 12px;

  &::before {
    content: "";
    margin-right: 15px;
    ${separatorLine}
  }

  &::after {
    content: "";
    margin-left: 15px;
    ${separatorLine}
  }
`;

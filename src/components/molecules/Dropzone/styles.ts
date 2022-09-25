import styled, { css } from "styled-components";
import { Download } from "styled-icons/material";

import { BaseDiv } from "@components/Base";

const dropzoneColorAttrs = ({ isActive = false }) => css`
  border-color: ${isActive && "var(--primary)"};
  color: ${isActive && "var(--primary)"};
`;

export const DropzoneWrapper = styled(BaseDiv)`
  min-width: 300px;
  font-weight: 300;
  border-width: 3px;
  border: 3px lightgray dashed;

  ${dropzoneColorAttrs}
`;

export const DownloadIcon = styled(Download)`
  margin-top: calc(1px + 1vw);
  color: gray;

  &.active {
    color: var(--primary);
  }
`;

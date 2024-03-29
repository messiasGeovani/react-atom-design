import styled from "styled-components";

import { Edit } from "@styled-icons/material";

import { AnimatedSpan } from "@components/Animated";
import Image from "next/image";

export const ProfileImgWrapper = styled(AnimatedSpan)`
  > svg {
    display: none;
  }

  &:hover {
    transition: all 0.5s;

    > svg {
      display: initial;
    }

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      border-radius: 50px;
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      z-index: 2;
      cursor: pointer;
    }
  }
`;

export const ProfileImg = styled(Image).attrs({
  height: 90,
  width: 90,
})`
  border-radius: 50px;
  cursor: pointer;
`;

export const EditIcon = styled(Edit)`
  position: absolute;
  color: white;
  z-index: 3;
  cursor: pointer;
`;

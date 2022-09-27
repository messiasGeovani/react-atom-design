import styled from "styled-components";

import { media } from "@/utils";

import { BaseInput } from "@components/Base";

export const Input = styled(BaseInput)`
  height: 50px;
  padding-left: 30px;
  padding: 10px 25px;
  margin: 10px 0;

  border: 1px solid lightgray;
  border-radius: 25px;

  ${media.lessThan("md")`
    height: 40px;
  `}
`;

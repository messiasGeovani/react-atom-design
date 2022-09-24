import styled from "styled-components";
import { respondTo } from "../../../utils";
import { BaseInput } from "../../Base";

export const Input = styled(BaseInput)`
  height: 50px;
  padding-left: 30px;
  padding: 10px 25px;
  margin: 10px 0;

  border: 1px solid lightgray;
  border-radius: 25px;

  ${respondTo.md`
    height: 40px;
  `}
`;

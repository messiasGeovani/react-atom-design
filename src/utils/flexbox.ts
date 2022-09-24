import { CSSObject } from "styled-components";

export interface IFlexboxProps {
  flex?: boolean;
  column?: boolean;
  alignItems?: "flex-start" | "center" | "flex-end";
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
}

export const flexbox = ({
  flex,
  column,
  alignItems,
  justifyContent,
}: IFlexboxProps): CSSObject => ({
  display: flex ? "flex" : "auto",
  flexDirection: column ? "column" : "row",
  alignItems,
  justifyContent,
});

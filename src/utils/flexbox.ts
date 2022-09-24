export interface IFlexboxProps {
  flex: boolean;
  column: boolean;
  alignItems: "flex-start" | "center" | "flex-end";
  justifyContent:
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
}: IFlexboxProps) => ({
  display: flex && "flex",
  flexDirection: column && "column",
  alignItems,
  justifyContent,
});

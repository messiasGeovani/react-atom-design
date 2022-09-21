export const flexbox = ({
  flex,
  column,
  alignItems,
  justifyContent,
}) => ({
  display: flex && "flex",
  flexDirection: column && "column",
  alignItems,
  justifyContent,
});
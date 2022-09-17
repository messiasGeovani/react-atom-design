export const flexbox = ({
  flex,
  column,
  alignItems,
  justifyContent,
}) => ({
  display: flex && "flex",
  flexDirection: column && "collumn",
  alignItems,
  justifyContent,
});
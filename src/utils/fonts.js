function setFontWeight({ strong, bold }) {
  if (strong) {
    return 500;
  }

  if (bold) {
    return 700;
  }

  return 400;
}

export const fontConfig = ({
  strong,
  bold,
  disabled,
  clickable,
  danger,
  textAlign,
}) => ({
  fontWeight: setFontWeight({ strong, bold }),
  color: disabled ? "lightgray" : danger && "darkred",
  cursor: clickable && "pointer",
  textAlign,
});

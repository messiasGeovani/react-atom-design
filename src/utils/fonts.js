function setFontWeight({ semibold, bold }) {
  if (semibold) {
    return 500;
  }

  if (bold) {
    return 700;
  }

  return 400;
}

export const fontConfig = ({ semibold, bold, clickable, textAlign }) => ({
  fontWeight: setFontWeight({ semibold, bold }),
  cursor: clickable && "pointer",
  textAlign,
});

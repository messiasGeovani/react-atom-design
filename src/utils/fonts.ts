export interface IFontProps {
  semibold: boolean;
  bold: boolean;
  clickable: boolean;
  textAlign: "left" | "right" | "center";
}

function setFontWeight({
  semibold,
  bold,
}: Omit<IFontProps, "textAlign" | "clickable">) {
  if (semibold) {
    return 500;
  }

  if (bold) {
    return 700;
  }

  return 400;
}

export const fontConfig = ({
  semibold,
  bold,
  clickable,
  textAlign,
}: IFontProps) => ({
  fontWeight: setFontWeight({ semibold, bold }),
  cursor: clickable && "pointer",
  textAlign,
});

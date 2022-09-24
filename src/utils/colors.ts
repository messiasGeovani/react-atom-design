export interface IColorProps {
  background: string;
  color: string;
  fill: string;
};

function setColor(colorValue: string) {
  if (!colorValue) {
    return;
  }

  const palleteColors = [
    "primary",
    "secondary",
    "tertiary",
    "success",
    "danger",
  ];

  if (palleteColors.includes(colorValue)) {
    return `var(--${colorValue})`;
  }

  return colorValue;
}

export const colors = ({ background, color, fill }: IColorProps) => ({
  background: setColor(background),
  color: setColor(color),
  fill: setColor(fill),
});

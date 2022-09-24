export interface IResizerProps {
  fullWidth?: boolean;
  fullHeight?: boolean;
}

export const resizer = ({ fullWidth, fullHeight }: IResizerProps) => ({
  width: fullWidth ? "100%" : "auto",
  height: fullHeight ? "100%" : "auto",
});

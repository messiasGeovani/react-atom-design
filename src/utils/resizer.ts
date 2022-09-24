export interface IResizerProps {
  fullWidth: boolean;
  fullHeight: boolean;
}

export const resizer = ({ fullWidth, fullHeight }: IResizerProps) => ({
  width: fullWidth && "100%",
  height: fullHeight && "100%",
});

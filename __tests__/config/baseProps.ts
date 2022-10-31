const PRIMARY_COLOR = "var(--primary)";

const flexboxObj = {
  flex: true,
  column: true,
  alignItems: "center",
  justifyContent: "center",
};

const resizerObj = {
  fullWidth: true,
  fullHeight: true,
};

export const spacerObj = {
  margin: 1,
  mt: 1,
  mr: 1,
  mb: 1,
  ml: 1,
  padding: 1,
  pt: 1,
  pr: 1,
  pb: 1,
  pl: 1,
};

const fontConfigObj = {
  fontWeight: 500,
  cursor: "pointer",
  textAlign: "center",
};

export const colorsObj = {
  background: PRIMARY_COLOR,
  color: PRIMARY_COLOR,
  fill: PRIMARY_COLOR,
};

export const defaultAttrs = {
  ...resizerObj,
  ...spacerObj,
};

export const flexAttrs = {
  ...defaultAttrs,
  ...flexboxObj,
};

export const textAttrs = {
  ...defaultAttrs,
  ...fontConfigObj,
  ...colorsObj,
};

export const imgAttrs = spacerObj;

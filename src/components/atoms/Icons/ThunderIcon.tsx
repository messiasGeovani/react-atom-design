import React from "react";

import { colors, normalizeObject, spacer } from "@/utils";
import { IColorProps } from "@/utils/colors";
import { ISpacerProps } from "@/utils/spacer";

export function ThunderIcon({ size = 24, color = "primary", ...props }) {
  const spacingOptions = spacer(props as ISpacerProps);
  const normalizedSpacingOptions = normalizeObject(spacingOptions);
  const { fill } = colors({ fill: color } as IColorProps);

  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin"
      className="jam jam-thunder-f"
      fill={fill}
      style={normalizedSpacingOptions}
      {...props}
    >
      <path d="M5.708 4.968h1.789a1.5 1.5 0 0 1 1.378 2.09l-3.96 9.243a1.049 1.049 0 0 1-2.012-.413v-6.92L1.45 8.923A1.5 1.5 0 0 1 0 7.423V1.5A1.5 1.5 0 0 1 1.5 0h2.708a1.5 1.5 0 0 1 1.5 1.5v3.468z" />
    </svg>
  );
}

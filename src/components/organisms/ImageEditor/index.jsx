import React, { useEffect, useRef } from "react";

import { configPinturaEditor } from "../../../lib/pintura";

import { EditorContainer } from "./styles";

export function ImageEditor() {
  const containerRef = useRef(null);

  useEffect(() => {
    configPinturaEditor(containerRef.current);
  }, []);

  return <EditorContainer ref={containerRef} />;
}

import React, { useCallback, useEffect, useRef, useState } from "react";

import { Dropzone } from "../../molecules";

import { configPinturaEditor } from "../../../lib/pintura";

import { EditorContainer } from "./styles";

export function ImageEditor({ onProcess }) {
  const [openEditor, setOpenEditor] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const containerRef = useRef(null);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();

      reader.onload = function ({ target }) {
        setSelectedImage(target.result);
        setOpenEditor(true);
      };
      reader.readAsDataURL(file);

      return file;
    });
  }, []);

  useEffect(() => {
    if (!openEditor) {
      return;
    }

    configPinturaEditor({
      elementRef: containerRef.current,
      selectedImage,
      onProcess,
    });
  }, [openEditor, onProcess, selectedImage]);

  if (!openEditor) {
    return <Dropzone onDrop={onDrop} />;
  }

  return <EditorContainer ref={containerRef} />;
}

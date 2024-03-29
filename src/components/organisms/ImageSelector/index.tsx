import { useCallback, useEffect, useRef, useState } from "react";

import { Dropzone } from "@components/molecules";

import { EditorContainer } from "./styles";

interface IIMageSelectorProps {
  onProcess: (image: string) => void;
}

export function ImageSelector({ onProcess }: IIMageSelectorProps) {
  const [openEditor, setOpenEditor] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const containerRef = useRef(null);

  const onDrop = useCallback((acceptedFiles: File[] | any) => {
    if (!acceptedFiles.length) {
      return;
    }

    acceptedFiles.map((file: File) => {
      const reader = new FileReader();

      reader.onload = function ({ target }: ProgressEvent<FileReader>) {
        if (!target) {
          return;
        }
        setSelectedImage(target.result as string);
        setOpenEditor(true);
      };
      reader.readAsDataURL(file);

      return file;
    });
  }, []);

  useEffect(() => {
    async function configEditor() {
      if (!openEditor) {
        return;
      }

      const { configPinturaEditor } = await import("@lib/pintura");

      configPinturaEditor({
        elementRef: containerRef.current,
        selectedImage,
        onProcess,
      });
    }

    configEditor();
  }, [openEditor, onProcess, selectedImage]);

  if (!openEditor) {
    return <Dropzone onDrop={onDrop} />;
  }

  return <EditorContainer ref={containerRef} />;
}

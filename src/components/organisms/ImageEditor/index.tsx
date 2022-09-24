import { useCallback, useEffect, useRef, useState } from "react";

import { Dropzone } from "../../molecules";

import { configPinturaEditor } from "../../../lib/pintura";

import { EditorContainer } from "./styles";

interface IIMageEditorProps {
  onProcess: (image: string) => void;
}

export function ImageEditor({ onProcess }: IIMageEditorProps) {
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

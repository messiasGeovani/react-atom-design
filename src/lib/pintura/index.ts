import {
  appendDefaultEditor,
  createDefaultImageReader,
  createDefaultImageWriter,
} from "./pintura";

import "./pintura.css";

interface IConfigPinturaEditorParams {
  elementRef: any;
  selectedImage: string;
  onProcess: (image: string) => void;
}

const getEditorOptions = (selectedImage: string) => ({
  // The source image to load
  src: selectedImage,

  // This will set a square crop aspect ratio
  imageCropAspectRatio: 1,

  // This will read the image data (required)
  imageReader: createDefaultImageReader(),

  // // This will write the output image
  imageWriter: createDefaultImageWriter(),
});

export function configPinturaEditor({
  elementRef,
  selectedImage,
  onProcess,
}: IConfigPinturaEditorParams) {
  if (!elementRef) {
    return;
  }

  const editor: any = appendDefaultEditor(
    elementRef,
    getEditorOptions(selectedImage)
  );

  editor.on("process", (imageState: any) => {
    const reader = new FileReader();

    reader.onload = function ({ target }) {
      if (!target) {
        return;
      }
      onProcess(target.result as string);
    };

    reader.readAsDataURL(imageState.dest);
  });

  return editor;
}

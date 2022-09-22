import {
  appendDefaultEditor,
  createDefaultImageReader,
  createDefaultImageWriter,
} from "./pintura";

const getEditorOptions = (selectedImage) => ({
  // The source image to load
  src: selectedImage,

  // This will set a square crop aspect ratio
  imageCropAspectRatio: 1,

  // This will read the image data (required)
  imageReader: createDefaultImageReader(),

  // // This will write the output image
  imageWriter: createDefaultImageWriter(),
});

export function configPinturaEditor({ elementRef, selectedImage, onProcess }) {
  if (!elementRef) {
    return;
  }

  import("./pintura.css");

  const editor = appendDefaultEditor(
    elementRef,
    getEditorOptions(selectedImage)
  );

  editor.on("process", (imageState) => {
    const reader = new FileReader();

    reader.onload = function ({ target }) {
      onProcess(target.result);
    };

    reader.readAsDataURL(imageState.dest);
  });

  return editor;
}

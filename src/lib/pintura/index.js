import {
  appendDefaultEditor,
  createDefaultImageReader,
  createDefaultImageWriter,
} from "./pintura";

const editorOptions = {
  // The source image to load
  src: "https://i2-prod.mirror.co.uk/incoming/article22588506.ece/ALTERNATES/s615/0_Dogs-Trust.jpg",

  // This will set a square crop aspect ratio
  imageCropAspectRatio: 1,

  // This will read the image data (required)
  imageReader: createDefaultImageReader(),

  // // This will write the output image
  imageWriter: createDefaultImageWriter(),
};

export function configPinturaEditor(elementRef) {
  if (!elementRef) {
    return;
  }

  import("./pintura.css");

  return appendDefaultEditor(elementRef, editorOptions);
}

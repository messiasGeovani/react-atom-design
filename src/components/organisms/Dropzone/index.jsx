import React from "react";
import { useDropzone } from "react-dropzone";
import { BaseDiv } from "../../Base";
import { Typography } from "../../atoms";

import { DropzoneWrapper } from "./styles";

export function Dropzone({ open }) {
  const { getRootProps, getInputProps, acceptedFiles: _ } = useDropzone({});

  return (
    <DropzoneWrapper padding={1}>
      <BaseDiv
        flex
        column
        alignItems="center"
        justifyContent="center"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <Typography disabled semibold>Arraste e solte uma imagem</Typography>
      </BaseDiv>
    </DropzoneWrapper>
  );
}

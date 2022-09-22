import React from "react";
import { useDropzone } from "react-dropzone";

import { PrimaryButton, Typography } from "../../atoms";
import { BaseDiv, BaseSpan } from "../../Base";

import { DownloadIcon, DropzoneWrapper } from "./styles";

export function Dropzone({ open, onDrop }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: false,
    onDrop,
  });

  const message = isDragActive
    ? "Solte o arquivo aqui"
    : "Arraste e solte o arquivo";

  return (
    <DropzoneWrapper padding={1} isActive={isDragActive}>
      <BaseDiv
        flex
        column
        alignItems="center"
        justifyContent="center"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <DownloadIcon size={30} className={isDragActive && "active"} />
        <Typography disabled semibold>
          {message}
        </Typography>
        <BaseSpan fullWidth mt={1}>
          <PrimaryButton
            type="button"
            fullWidth
            onClick={open}
            disabled={isDragActive}
          >
            Selecionar Arquivo
          </PrimaryButton>
        </BaseSpan>
      </BaseDiv>
    </DropzoneWrapper>
  );
}

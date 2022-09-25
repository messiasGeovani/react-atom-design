import React from "react";

import { useDropzone } from "react-dropzone";

import { PrimaryButton, Typography } from "@components/atoms";
import { BaseDiv, BaseSpan } from "@components/Base";

import { DownloadIcon, DropzoneWrapper } from "./styles";

interface IDropzoneProps {
  onDrop: (acceptedFiles: File[] | any) => void;
}

export function Dropzone({ onDrop }: IDropzoneProps) {
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
        <DownloadIcon size={30} className={isDragActive ? "active" : ""} />
        <Typography semibold>{message}</Typography>
        <BaseSpan fullWidth mt={1}>
          <PrimaryButton
            type="button"
            fullWidth
            onClick={onDrop}
            disabled={isDragActive}
          >
            Selecionar Arquivo
          </PrimaryButton>
        </BaseSpan>
      </BaseDiv>
    </DropzoneWrapper>
  );
}

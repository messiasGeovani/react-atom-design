import styled from "styled-components";

export const EditorContainer = styled.div`
  @import url('@lib/pintura/pintura.css');

  width: 95vw;
  height: 80vh;

  /* bright / dark mode */
  .pintura-editor {
    --color-background: 255, 255, 255;
    --color-foreground: 0, 0, 0;
  }
`;

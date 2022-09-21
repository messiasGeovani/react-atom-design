import styled from "styled-components";

export const EditorContainer = styled.div`
  width: 95vw;
  height: 600px;

  /* bright / dark mode */
  .pintura-editor {
    --color-background: 255, 255, 255;
    --color-foreground: 0, 0, 0;
  }

  @media (prefers-color-scheme: dark) {
    .pintura-editor {
      --color-background: 0, 0, 0;
      --color-foreground: 255, 255, 255;
    }
  }
`;

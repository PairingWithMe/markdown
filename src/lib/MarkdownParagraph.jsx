import React from "react";
import styled from "@emotion/styled";

const Paragraph = styled.p`
  font-family: Source-Serif-Pro, Georgia, Cambria, "Times New Roman", Times, serif;
  margin-top: 40px;
  font-size: 20px;
  overflow-wrap: break-word;
  text-rendering: optimizeLegibility;
  line-height: 32px;
`;

export default function MarkdownParagraph(props) {
  return <Paragraph {...props} />;
}

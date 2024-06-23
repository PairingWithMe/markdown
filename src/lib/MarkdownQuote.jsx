import React from "react";
import styled from "@emotion/styled";

const Blockquote = styled.blockquote`
  margin: 10px 0;
  padding: 3px 20px 3px 30px;
  border-left: solid 5px #a9b7c6;
  background-color: rgba(203, 217, 232, 0.2);
  color: #666;

  & p {
    font-size: 28px;
    line-height: 40px;
  }
`;

export default function MarkdownQuote(props) {
  return <Blockquote {...props} />;
}

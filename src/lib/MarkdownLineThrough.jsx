import styled from "@emotion/styled";

const LineThrough = styled.del`
  text-decoration-color: #da4b5d;
  text-decoration-thickness: 3px;
`;

export default function MarkdownLineThrough(props) {
  return <LineThrough {...props} />;
}

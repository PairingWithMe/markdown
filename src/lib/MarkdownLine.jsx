import styled from "@emotion/styled";

const HR = styled.hr`
  position: relative;
  margin: 30px 5%;
  line-height: 44px;
  border: 0;
  height: 2px;
  background-image: -webkit-linear-gradient(left, #f0f0f0, #ee0000, #f0f0f0);
  background-image: -moz-linear-gradient(left, #f0f0f0, #ee0000, #f0f0f0);
  background-image: -ms-linear-gradient(left, #f0f0f0, #ee0000, #f0f0f0);
  background-image: -o-linear-gradient(left, #f0f0f0, #ee0000, #f0f0f0);
  overflow: visible;

  &:before {
    position: absolute;
    content: "| |";
    font-style: italic;
    font-weight: bolder;
    font-size: 14px;
    color: #ee0000;
    top: -21px;
    left: 50%;
  }
`;

export default function MarkdownLine(props) {
  return <HR {...props} />;
}

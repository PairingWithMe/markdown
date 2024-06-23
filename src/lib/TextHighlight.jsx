import styled from "@emotion/styled";

const HIGHLIGHT_YELLOW_COLOR = "252, 239, 53";

export const TextHighlight = styled.span`
  background: linear-gradient(
      104deg,
      rgba(${({ color }) => color || HIGHLIGHT_YELLOW_COLOR}, 0) 0.9%,
      rgba(${({ color }) => color || HIGHLIGHT_YELLOW_COLOR}, 1.25) 2.4%,
      rgba(${({ color }) => color || HIGHLIGHT_YELLOW_COLOR}, 0.5) 5.8%,
      rgba(${({ color }) => color || HIGHLIGHT_YELLOW_COLOR}, 0.1) 93%,
      rgba(${({ color }) => color || HIGHLIGHT_YELLOW_COLOR}, 0.7) 96%,
      rgba(${({ color }) => color || HIGHLIGHT_YELLOW_COLOR}, 0) 98%
    ),
    linear-gradient(
      183deg,
      rgba(${({ color }) => color || HIGHLIGHT_YELLOW_COLOR}, 0) 0%,
      rgba(${({ color }) => color || HIGHLIGHT_YELLOW_COLOR}, 0.3) 7.9%,
      rgba(${({ color }) => color || HIGHLIGHT_YELLOW_COLOR}, 0) 15%
    );
  -webkit-box-decoration-break: clone;
  border-radius: 7.5px;
  text-shadow: -12px 12px 9.8px rgba(${({ color }) => color || HIGHLIGHT_YELLOW_COLOR}, 0.7),
    21px -18.1px 7.3px rgba(255, 255, 255, 1), -18.1px -27.3px 30px rgba(255, 255, 255, 1);
`;

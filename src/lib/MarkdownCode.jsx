import { useState } from "react";
import styled from "@emotion/styled";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { SELECT_CODE_LINES, UNSELECT_CODE_LINES } from "./event/Events";
import { useHandler } from "@aux4/use-handler";

const Code = styled.div`
  font-size: 16px;
  max-width: 100%;
  overflow-x: auto;

  && > div {
    margin: 0 !important;
  }
`;

export default function MarkdownCode(props) {
  const [highlightedLines, setHighlightedLines] = useState([]);

  useHandler(
    (eventType, options) => {
      const lines = [options.start];

      if (options.end && options.end > options.start) {
        let current = options.start;
        while (current < options.end) {
          current += 1;
          lines.push(current);
        }
      }

      setHighlightedLines(lines);
    },
    [SELECT_CODE_LINES],
  );

  useHandler(() => {
    setHighlightedLines([]);
  }, [UNSELECT_CODE_LINES]);

  return (
    <Code>
      <SyntaxHighlighter
        showLineNumbers
        wrapLines
        lineNumberStyle={{ minWidth: "30px" }}
        lineProps={(lineNumber) => {
          const style = { display: "block" };
          if (highlightedLines.includes(lineNumber)) {
            style.backgroundColor = "#424242";
          }
          return { style };
        }}
        children={props.children}
        style={darcula}
        language={props.language}
        PreTag="div"
        {...props}
      />
    </Code>
  );
}

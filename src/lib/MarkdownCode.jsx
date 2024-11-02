import { useState } from "react";
import styled from "@emotion/styled";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { SELECT_CODE_LINES, UNSELECT_CODE_LINES } from "./event/Events";
import { useHandler } from "@aux4/use-handler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const Code = styled.div`
  position: relative;
  font-size: 16px;
  max-width: 100%;
  overflow-x: auto;
  padding-right: 15px;
  background-color: #2b2b2b;

  && > div {
    margin: 0 !important;
  }
`;

const CopyButton = styled.button`
  position: absolute;
  padding: 5px;
  top: 5px;
  right: 5px;
  width: 32px;
  height: 32px;
  font-size: 20px;
  border-radius: 5px;
  background-color: #333;
  color: #666;
  box-shadow: none;
  border: none;

  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;

export default function MarkdownCode({ hideLineNumbers, hideCopy, ...props }) {
  const [highlightedLines, setHighlightedLines] = useState([]);

  useHandler(
    (_, options) => {
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

  const handleCopy = () => {
    const language = props.language;
    let text = props.children;

    if (!text) return;

    if (language === "bash") {
      text = text.replace(/^[>$]\s/g, "");
    }

    navigator.clipboard.writeText(text);

    if (props.onCopy) {
      props.onCopy(text);
    }
  };

  return (
    <Code>
      {!hideCopy && (
        <CopyButton onClick={handleCopy}>
          <FontAwesomeIcon icon={faCopy} />
        </CopyButton>
      )}
      <SyntaxHighlighter
        showLineNumbers={!hideLineNumbers}
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

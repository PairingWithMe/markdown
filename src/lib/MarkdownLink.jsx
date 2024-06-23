import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { TextHighlight } from "./TextHighlight";
import { selectCodeLines, unselectCodeLines } from "./event/Actions";

const { VITE_URL: URL } = import.meta.env;

const Link = styled.a`
  color: rgb(204, 120, 50);
  text-decoration: none;

  & > svg {
    margin-left: 5px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const HashTagLink = styled.a`
  text-decoration: none;
  &:visited {
    color: #0000ee;
  }
`;

export function MarkdownLink({ href, ...otherProps }) {
  if (href.indexOf(URL) === -1 && href.startsWith("http")) {
    return (
      <Link href={href} target="_blank" {...otherProps}>
        {otherProps.children}
        {typeof otherProps.children === "string" && (
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        )}
      </Link>
    );
  }

  if (otherProps.node.properties.href.startsWith("lines_")) {
    const lines = otherProps.node.properties.href.replace("lines_", "");
    const splitLines = lines.split("-");
    const start = parseInt(splitLines[0]);
    const end = splitLines[1] ? parseInt(splitLines[1]) : undefined;

    return (
      <TextHighlight
        color="200, 200, 255"
        {...otherProps}
        style={{ cursor: "pointer" }}
        onMouseEnter={() => selectCodeLines(start, end)}
        onMouseLeave={() => unselectCodeLines()}
      >
        {otherProps.children}
      </TextHighlight>
    );
  }

  if (
    otherProps.children.length > 0 &&
    otherProps.children[0].startsWith("#")
  ) {
    return (
      <HashTagLink href={href} {...otherProps}>
        <TextHighlight color="150, 200, 255">
          {otherProps.children}
        </TextHighlight>
      </HashTagLink>
    );
  }

  return <Link href={href} {...otherProps} />;
}

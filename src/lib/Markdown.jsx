import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import ReactMarkdown from "react-markdown";
import MarkdownCode from "./MarkdownCode";
import { MarkdownLink } from "./MarkdownLink";
import { H1, H2, H3, H4, H5, H6, withId } from "./MarkdownHeading";
import { TextHighlight } from "./TextHighlight";
import MarkdownLine from "./MarkdownLine";
import MarkdownLineThrough from "./MarkdownLineThrough";
import MarkdownTable from "./MarkdownTable";
import MarkdownQuote from "./MarkdownQuote";
import MarkdownImage from "./MarkdownImage";
import MarkdownParagraph from "./MarkdownParagraph";
import { textTransform } from "./TextTransformer";
import SocialEmbed from "./SocialEmbed";
import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkMermaidPlugin from "remark-mermaid-plugin";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { remarkSocial } from "./plugin/SocialRemarkPlugin";

export const CenterBox = styled.div`
  text-align: center;
`;

export default function Markdown(props) {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!props.content) return;

    textTransform(props.content, props.rules).then((content) =>
      setContent(content),
    );
  }, [props.content, props.rules]);

  if (!content) {
    return <div>{props.noContent}</div>;
  }

  return (
    <ReactMarkdown
      components={{
        a: MarkdownLink,
        h1: withId(H1),
        h2: withId(H2),
        h3: withId(H3),
        h4: withId(H4),
        h5: withId(H5),
        h6: withId(H6),
        img: ({ node, ...params }) => (
          <MarkdownImage {...params} />
        ),
        del: ({ node, ...params }) => (
          <MarkdownLineThrough>{params.children}</MarkdownLineThrough>
        ),
        hr: () => <MarkdownLine />,
        em: ({ node, ...params }) => (
          <TextHighlight>{params.children}</TextHighlight>
        ),
        strong: ({ node, ...params }) => (
          <TextHighlight color="0, 255, 0">{params.children}</TextHighlight>
        ),
        table: ({ node, ...params }) => <MarkdownTable {...params} />,
        blockquote: ({ node, ...params }) => <MarkdownQuote {...params} />,
        p: ({ node, ...params }) => <MarkdownParagraph {...params} />,
        pre: ({ node, ...params }) => <div {...params} />,
        social: ({ node, ...params }) => <SocialEmbed url={params.url} />,
        code({ node, inline, className, children, ...params }) {
          const language = /language-(\w+)/.exec(className || "");
          if (!inline && language && language[1] === "mermaid") {
            return (
              <CenterBox>
                <code>{children}</code>
              </CenterBox>
            );
          }
          return !inline && language ? (
            <MarkdownCode
              language={language[1]}
              {...params}
              children={String(children).replace(/\n$/, "")}
            />
          ) : (
            <TextHighlight color="255, 150, 150">{children}</TextHighlight>
          );
        },
      }}
      remarkPlugins={[
        remarkGfm,
        remarkMath,
        remarkEmoji,
        remarkMermaidPlugin,
        remarkSocial,
      ]}
      rehypePlugins={[rehypeKatex, rehypeRaw, rehypeStringify]}
      remarkRehypeOptions={{ emoticon: true }}
    >
      {content}
    </ReactMarkdown>
  );
}

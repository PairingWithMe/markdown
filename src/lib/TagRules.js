import { CODE_LINE_REGEX, HASHTAG_REGEX } from "./Regex";
import { rule } from "./TextTransformer";

const { VITE_URL: URL } = import.meta.env;

export function hashTagRule() {
  return rule(HASHTAG_REGEX, async (original, _, match) => {
    const text = match[1];
    if (!text) {
      return original;
    }
    return `[${text.substring(0)}](${URL}/hashtag/${text.substring(1)})`;
  });
}

export function codeLineRule() {
  return rule(CODE_LINE_REGEX, async (original, _, opt) => {
    const text = opt[1];
    if (!text) {
      return original;
    }

    const expr = new RegExp(CODE_LINE_REGEX);
    const match = expr.exec(text);

    let content = match.groups ? match.groups.line : match[3];
    if ((match.groups && match.groups.lineEnd) || match[5]) {
      const lineEnd = match.groups ? match.groups.lineEnd : match[5];
      content += `-${lineEnd}`;
    }

    return `[${text}](lines_${content})`;
  });
}

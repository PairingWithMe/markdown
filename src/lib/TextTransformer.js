import { codeLineRule, hashTagRule } from "./TagRules";

export async function textTransform(text) {
  if (!text) {
    return text;
  }

  const rules = [hashTagRule(), codeLineRule()];

  const references = [];

  await Promise.all(rules.map(rule => rule.transform(text, references)));

  let finalText = text;
  let offset = 0;

  references.sort((a, b) => {
    return a.start - b.start;
  });

  references.forEach(match => {
    finalText =
      finalText.substring(0, match.start + offset) + match.replacement + finalText.substring(match.end + offset);

    offset += match.replacement.length - match.text.length;
  });

  return finalText;
}

export function rule(regex, transformer) {
  return {
    transform: async (text, references) => {
      const expr = new RegExp(regex);
      let match;
      while ((match = expr.exec(text)) != null) {
        const textMatch = match[0];
        const start = match.index;
        const end = start + textMatch.length;
        const replacement = await transformer(textMatch, text);

        references.push({ text: textMatch, start, end, replacement });
      }
    }
  };
}

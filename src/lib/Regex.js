export const HASHTAG_REGEX = /(?:```[\s\S]*?```)|(#[\w\d]+)/g;

export const CODE_LINE_REGEX = /(?:```[\s\S]*?```)|((?<text>lines?)[:\s]*(?<line>\d+)(\s*-\s*(?<lineEnd>\d+))?)/gi;

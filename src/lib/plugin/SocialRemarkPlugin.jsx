import { visit } from "unist-util-visit";

const DOMAINS = [
  /youtube.com/,
  /youtu.be/,
  /twitter.com\/.+\/status\//,
  /x.com\/.+\/status\//,
  /instagram.com\/p\//,
  /linkedin.com\/embed\//,
  /facebook.com\/.+\/posts\//,
  /tiktok.com\/.+\/video\//
];

export function remarkSocial() {
  return tree => {
    visit(tree, "link", node => {
      const url = node.url;

      if (isSocial(url)) {
        node.type = "html";
        node.value = `<social url="${url}" />`;
        node.children = undefined;
      }
    });
  };
}

const isSocial = url => {
  return DOMAINS.some(domain => domain.test(url));
};

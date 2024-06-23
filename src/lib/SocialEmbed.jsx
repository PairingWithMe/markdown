import {
  FacebookEmbed,
  InstagramEmbed,
  LinkedInEmbed,
  TikTokEmbed,
  TwitterEmbed,
  YouTubeEmbed
} from "react-social-media-embed";

export default function SocialEmbed(props) {
  if (props.url.includes("youtube.com") || props.url.includes("youtu.be")) {
    return <YouTubeEmbed url={props.url} width={"100%"} height={500} />;
  } else if (props.url.includes("twitter.com") || props.url.includes("x.com")) {
    return <TwitterEmbed url={props.url} />;
  } else if (props.url.includes("instagram.com")) {
    return <InstagramEmbed url={props.url} />;
  } else if (props.url.includes("linkedin.com")) {
    return <LinkedInEmbed url={props.url} />;
  } else if (props.url.includes("tiktok.com")) {
    return <TikTokEmbed url={props.url} />;
  } else if (props.url.includes("facebook.com")) {
    return <FacebookEmbed url={props.url} />;
  }
  return props.url;
}

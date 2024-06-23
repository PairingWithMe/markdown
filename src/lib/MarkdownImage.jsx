import styled from "@emotion/styled";
import LazyLoad from "react-lazy-load";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import * as fontawesome from "@fortawesome/fontawesome-svg-core";

fontawesome.library.add(fas, fab);

const ImageBox = styled.div`
  padding: 10px 0;
  text-align: center;
`;

const Image = styled.img`
  max-width: 100%;
  width: ${props => (props.banner ? "100%" : "auto")};
`;

export default function MarkdownImage(props) {
  const src =
    props.src === "icon"
      ? "icon"
      : props.src === "logo"
      ? "logo"
      : props.src;

  if (!src) {
    return null;
  }

  if (src === "logo") {
    return <FontAwesomeIcon icon={`fab fa-${props.alt}`} />;
  }
  
  if (src === "icon") {
    return <FontAwesomeIcon icon={`fas fa-${props.alt}`} />;
  }

  return (
    <ImageBox>
      <LazyLoad>
        <Image banner={props.alt === "banner"} {...props} src={src} />
      </LazyLoad>
    </ImageBox>
  );
}

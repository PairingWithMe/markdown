import styled from "@emotion/styled";

export const H1 = styled.h1`
  margin: 20px 0;
  font-family: Roboto-Thin, Roboto, SansSerif;
  font-size: 60px;
  letter-spacing: -1.5px;
`;

export const H2 = styled.h2`
  margin: 15px 0;
  font-family: Roboto-Thin, Roboto, SansSerif;
  font-size: 48px;
  letter-spacing: -0.5px;
`;

export const H3 = styled.h3`
  margin: 10px 0;
  font-family: Roboto-Thin, Roboto, SansSerif;
  font-size: 34px;
  letter-spacing: 0;
`;

export const H4 = styled.h4`
  margin: 10px 0;
  font-family: Roboto-Thin, Roboto, SansSerif;
  font-size: 28px;
  letter-spacing: 0.25px;
`;

export const H5 = styled.h5`
  font-family: Roboto-Thin, Roboto, SansSerif;
  font-size: 24px;
  letter-spacing: 0;
`;

export const H6 = styled.h6`
  font-family: Roboto, Roboto, SansSerif;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 0.15px;
`;

export function withId(Component) {
  return function ComponentWithId({ id, children }) {
    let componentId = id;
    if (!componentId && typeof children === "string") {
      componentId = children.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase();
    }
    return <Component id={componentId}>{children}</Component>;
  };
}

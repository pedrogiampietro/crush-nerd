import styled, { css } from "styled-components/native";

export interface TextProps {
  fontSize?: string;
  color?: string;
  fontWeight?: string;
}

export default styled.Text<TextProps>`
  color: ${(props) => props.color ?? "#000000"};

  ${(props) => {
    const selectedSize = props.fontSize ?? "14px";

    return css`
      font-size: ${selectedSize};
      line-height: ${selectedSize};
    `;
  }}
`;

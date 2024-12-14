import { Layout } from "constants/layout";
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: max-content;
  position: relative;
  bottom: 0;
  border-top: 1px solid ${({ theme }) => theme.lineCol};
  padding: 1.5rem ${Layout.SECTION_PADDING};
  display: flex;
  flex-direction: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${Layout.CONTENT_MAX_WIDTH};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.secondaryFontCol};
  ${(props) =>
    props.compact &&
    css`
      flex-direction: row;
      justify-content: flex-start;
    `}
`;

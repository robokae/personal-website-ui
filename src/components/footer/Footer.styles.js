import { Breakpoint, Layout } from "constants/layout";
import styled, { css } from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: max-content;
  position: relative;
  bottom: 0;
  padding: 0 ${Layout.SECTION_PADDING};
  display: flex;
  flex-direction: center;
  justify-content: center;
  margin-top: auto;

  @media ${Breakpoint.MOBILE_LG} {
    padding: 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${Layout.CONTENT_MAX_WIDTH};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  border-top: 1px solid ${({ theme }) => theme.lineCol};
  padding: 1.5rem 0;
  font-size: 0.9rem;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;

  @media ${Breakpoint.MOBILE_LG} {
    padding: 0 ${Layout.SECION_PADDING_SM};
    display: grid;
    grid-template-columns: max-content max-content;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 0.5rem;
    grid-column-gap: 3rem;
    grid-auto-flow: column;
  }
`;

export const CaptionContainer = styled.div`
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

  @media ${Breakpoint.MOBILE_LG} {
    padding: 0 ${Layout.SECION_PADDING_SM};
  }
`;

export const Caption = styled.p`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  @media ${Breakpoint.MOBILE_MD} {
    flex-direction: column;
  }
`;

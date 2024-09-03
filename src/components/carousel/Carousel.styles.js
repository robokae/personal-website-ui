import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const SlideContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  scrollbar-width: none;
  gap: 1.5rem;
  padding: 0 ${(props) => props.paddingX ?? 0};
  ${(props) =>
    props.enableScroll &&
    css`
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
    `};
`;

export const Slide = styled.div`
  width: 100%;
  flex-shrink: 0;
  scroll-snap-align: center;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;
`;

export const ActionButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  background-color: #283137;
  outline: none;
  border: transparent;
  border-radius: 50%;
  opacity: 0.25;
  transition: opacity 0.2s ease-in-out;
  color: ${({ theme }) => theme.secondaryFontCol};
  ${(props) =>
    props.active &&
    css`
      cursor: pointer;
      opacity: 1;
    `};
`;

export const SlideIndicatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const SlideIndicator = styled(FontAwesomeIcon)`
  font-size: 0.5rem;
  cursor: pointer;
  color: ${(props) =>
    props.active
      ? ({ theme }) => theme.accentCol
      : ({ theme }) => theme.lineCol};
`;

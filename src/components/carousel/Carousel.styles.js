import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breakpoint, Layout } from "constants/layout";
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
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
  scroll-snap-stop: normal;
  gap: 1.5rem;
  padding: 0 ${Layout.SECTION_PADDING};
  ${(props) =>
    props.paddingX &&
    css`
      padding: 0 ${props.paddingX};
    `};

  @media ${Breakpoint.MOBILE_LG} {
    gap: 1rem;
    padding: 0 ${Layout.SECION_PADDING_SM};
  }
`;

export const Slide = styled.div`
  width: 100%;
  flex-shrink: 0;
  scroll-snap-align: center;
  scroll-snap-stop: always;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;
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

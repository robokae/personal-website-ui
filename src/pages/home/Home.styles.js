import styled from "styled-components";
import {
  ContentLayout,
  HeroLayout,
  SectionLayout,
} from "../../components/layout/Layout";
import {
  LARGE_GAP,
  MEDIA_QUERY_BREAKPOINT_LG,
  MEDIA_QUERY_BREAKPOINT_MED,
  MEDIA_QUERY_BREAKPOINT_SM,
} from "../../constants/StyleConstants";

export const ReflectionSectionLayout = styled(SectionLayout)`
  background-color: #45626e;
`;

export const ReflectionContentLayout = styled(ContentLayout)`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 100vw;
`;

export const Description = styled(ContentLayout)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  z-index: 1;

  @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_LG}) {
    top: 10%;
  }

  @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_MED}) {
    width: 100%;
    position: relative;
    padding-left: 0rem;

    & > * {
      color: ${({ theme }) => theme.primaryFontCol};
    }
  }
`;

export const CardContent = styled.div``;

import styled from "styled-components";
import { ContentLayout, SectionLayout } from "../../components/layout/Layout";
import {
  MEDIA_QUERY_BREAKPOINT_LG,
  MEDIA_QUERY_BREAKPOINT_MED,
} from "../../constants/StyleConstants";

export const ReflectionSectionLayout = styled(SectionLayout)`
  background-color: ${({ theme }) => theme.secondaryBgCol};
`;

export const ReflectionContentLayout = styled(ContentLayout)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  justify-content: left;
  align-items: start;
  position: relative;

  @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_LG}) {
    display: flex;
    flex-direction: column;
  }
`;

export const ResponsiveTypography = styled.div`
  text-align: left;

  @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_MED}) {
    text-align: center;
  }
`;

export const Description = styled(ContentLayout)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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

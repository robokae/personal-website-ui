import styled from "styled-components";
import { ContentLayout, HeroLayout } from "../../components/layout/Layout";
import {
  LARGE_GAP,
  MEDIA_QUERY_BREAKPOINT_LG,
  MEDIA_QUERY_BREAKPOINT_MED,
  MEDIA_QUERY_BREAKPOINT_SM,
} from "../../constants/StyleConstants";
import { PageHeading } from "../../components/typography/Typography";

export const Hero = styled(HeroLayout)`
  background: ${({ theme }) => theme.homePageHeroGradient};
  min-height: 50vh;
  display: flex;
  place-content: center;

  @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_SM}) {
    min-height: 40vh;
  }
`;

export const Content = styled(ContentLayout)`
  height: max-content;
  justify-content: left;
  gap: ${LARGE_GAP};
`;

export const MultiLineHeading = styled.div`
  width: 100%;
`;

export const HeroHeading = styled(PageHeading)`
  text-shadow: 0.25rem 0.25rem 2rem rgba(0, 0, 0, 0.3);
`;

export const ReflectionContentLayout = styled(ContentLayout)`
  position: relative;

  @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_MED}) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const DescriptionOverlay = styled.div`
  width: 45%;
  padding-left: 2rem;
  position: absolute;
  top: 20%;
  left: 0;
  color: ${({ theme }) => theme.primaryBgCol};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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

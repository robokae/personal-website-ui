import styled from "styled-components";
import { ContentLayout, HeroLayout } from "../../components/layout/Layout";
import {
  LARGE_GAP,
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
  justify-content: center;
  gap: ${LARGE_GAP};
`;

export const MultiLineHeading = styled.div`
  width: 100%;
`;

export const HeroHeading = styled(PageHeading)`
  text-shadow: 0.25rem 0.25rem 2rem rgba(0, 0, 0, 0.3);
`;

import styled from "styled-components";
import { ContentLayout, HeroLayout } from "../../../components/layout/Layout";
import {
  MultiLineHeading,
  PageHeading,
  SubHeading,
} from "../../../components/typography/Typography";
import {
  LARGE_GAP,
  LEFT,
  MEDIA_QUERY_BREAKPOINT_SM,
} from "../../../constants/StyleConstants";
import { heroHeadingColor } from "../../../global/colors";

const HeroContainer = styled(HeroLayout)`
  background: ${({ theme }) => theme.homePageHeroGradient};
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: left;

  @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_SM}) {
    min-height: 40vh;
  }
`;

const HeroHeading = styled(PageHeading)`
  text-shadow: 0.25rem 0.25rem 2rem rgba(0, 0, 0, 0.3);
`;

const Content = styled(ContentLayout)`
  height: max-content;
  gap: ${LARGE_GAP};
`;

const Hero = ({ data }) => {
  return (
    <HeroContainer>
      <Content>
        <MultiLineHeading>
          {data.multiLineHeading.map((line, index) => (
            <HeroHeading align={LEFT} color={heroHeadingColor} key={index}>
              {line}
            </HeroHeading>
          ))}
        </MultiLineHeading>
        <SubHeading align={LEFT}>{data.subHeading}</SubHeading>
      </Content>
    </HeroContainer>
  );
};

export default Hero;

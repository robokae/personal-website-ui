import styled from "styled-components";
import { ContentLayout, HeroLayout } from "../../../components/layout/Layout";
import Typography from "../../../components/typography/Typography";
import {
  LARGE_GAP,
  LEFT,
  MEDIA_QUERY_BREAKPOINT_SM,
  SUBHEADING_HTML_TAG,
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

const MultiLineHeading = styled.div`
  width: 100%;
`;

const HEADING_TEXT_SHADOW = "0.25rem 0.25rem 2rem rgba(0, 0, 0, 0.3)";

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
            <Typography
              tag="h1"
              textAlign="center"
              color={heroHeadingColor}
              textShadow={HEADING_TEXT_SHADOW}
              key={index}
            >
              {line}
            </Typography>
          ))}
        </MultiLineHeading>
        <Typography tag={SUBHEADING_HTML_TAG} textAlign="center">
          {data.subHeading}
        </Typography>
      </Content>
    </HeroContainer>
  );
};

export default Hero;

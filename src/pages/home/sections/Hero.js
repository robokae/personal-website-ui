import styled from "styled-components";
import { ContentLayout, HeroLayout } from "../../../components/layout/Layout";
import Typography from "../../../components/typography/Typography";
import { SUBHEADING_HTML_TAG } from "../../../constants/StyleConstants";
import { HERO_TEXT_COLOR } from "../../../constants/ColorConstants";
import {
  LARGE_GAP,
  MEDIA_QUERY_BREAKPOINT_SM,
} from "../../../constants/LayoutConstants";

const HeroContainer = styled(HeroLayout)`
  background: ${({ theme }) => theme.homePageHeroGradient};
  min-height: 60vh;
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

const TEXT_SHADOW = "0.25rem 0.25rem 2rem rgba(0, 0, 0, 0.3)";

const Content = styled(ContentLayout)`
  height: max-content;
  gap: ${LARGE_GAP};
`;

const Hero = ({ data }) => {
  return (
    <HeroContainer>
      <Content>
        <MultiLineHeading>
          {data.headings.map((line, index) => (
            <Typography
              tag="h1"
              textAlign="center"
              color={HERO_TEXT_COLOR}
              textShadow={TEXT_SHADOW}
              key={index}
            >
              {line}
            </Typography>
          ))}
        </MultiLineHeading>
        {data.subHeadings.map((line, index) => (
          <Typography
            key={index}
            color={HERO_TEXT_COLOR}
            tag={SUBHEADING_HTML_TAG}
            textShadow={TEXT_SHADOW}
            textAlign="center"
          >
            {line}
          </Typography>
        ))}
      </Content>
    </HeroContainer>
  );
};

export default Hero;

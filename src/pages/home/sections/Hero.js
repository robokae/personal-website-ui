import styled from "styled-components";
import { HeroLayout } from "../../../components/layout/Layout";
import Typography from "../../../components/typography/Typography";
import { SUBHEADING_HTML_TAG } from "../../../constants/StyleConstants";
import {
  HEADER_HEIGHT,
  MEDIA_QUERY_BREAKPOINT_SM,
  MEDIUM_GAP,
} from "../../../constants/LayoutConstants";
import DeveloperSetup from "../../../components/illustrations/DeveloperSetup.svg";
import {
  CENTER,
  H1,
  NORMAL,
  TEXT_SHADOW,
} from "../../../constants/TypographyConstants";

const HeroContainer = styled(HeroLayout)`
  background: #527c85;
  height: 80vh;
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_SM}) {
    height: 60vh;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: ${MEDIUM_GAP};
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Image = styled.img`
  height: calc((80vh - ${HEADER_HEIGHT}) / 2);

  @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_SM}) {
    height: calc((60vh - ${HEADER_HEIGHT}) / 2);
  }
`;

const Hero = ({ data }) => {
  return (
    <HeroContainer>
      <Content>
        <HeadingContainer>
          <>
            {data.headings.map((line, index) => (
              <Typography
                tag={H1}
                textAlign={CENTER}
                textShadow={TEXT_SHADOW}
                key={index}
              >
                {line}
              </Typography>
            ))}
          </>
          {data.subHeadings.map((line, index) => (
            <Typography
              key={index}
              tag={SUBHEADING_HTML_TAG}
              textShadow={TEXT_SHADOW}
              textAlign={CENTER}
              fontWeight={NORMAL}
            >
              {line}
            </Typography>
          ))}
        </HeadingContainer>
        <Image
          src={DeveloperSetup}
          alt="Desk with chair and computer monitor"
        />
      </Content>
    </HeroContainer>
  );
};

export default Hero;

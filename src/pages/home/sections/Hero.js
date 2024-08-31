import styled from "styled-components";
import { HeroLayout } from "components/layout/Layout";
import Typography from "components/typography/Typography";
import { Breakpoint, Layout } from "constants/layout";
import DeveloperSetup from "components/illustrations/DeveloperSetup.svg";
import { Typography as TypographyConstants } from "constants/typography";

const HeroContainer = styled(HeroLayout)`
  background: #527c85;
  height: 80vh;
  display: flex;
  justify-content: center;

  @media ${Breakpoint.MOBILE_LG} {
    height: 60vh;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: ${Layout.GAP_MD};
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Image = styled.img`
  height: calc((80vh - ${Layout.HEADER_HEIGHT}) / 2);

  @media ${Breakpoint.MOBILE_LG} {
    height: calc((60vh - ${Layout.HEADER_HEIGHT}) / 2);
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
                tag={TypographyConstants.H1}
                textAlign="center"
                textShadow={TypographyConstants.TEXT_SHADOW}
                key={index}
              >
                {line}
              </Typography>
            ))}
          </>
          {data.subHeadings.map((line, index) => (
            <Typography
              key={index}
              tag={TypographyConstants.SUBHEADING_TAG}
              textShadow={TypographyConstants.TEXT_SHADOW}
              textAlign="center"
              fontWeight="normal"
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

import styled from "styled-components";
import content from "content/about.json";
import {
  ContentLayout,
  PageContentLayout,
  SectionLayout,
} from "components/layout/Layout";
import Card from "components/card/Card";
import Typography from "components/typography/Typography";
import { Typography as TypographyConstants } from "constants/typography";
import { Breakpoint } from "constants/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconSize } from "constants/style";

const Overview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
  grid-auto-rows: 1fr;

  @media ${Breakpoint.TABLET} {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  @media ${Breakpoint.MOBILE_LG} {
    grid-template-columns: 1fr;
  }
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${Breakpoint.MOBILE_LG} {
    flex-direction: row;
    justify-content: left;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.accentCol};
  font-size: ${IconSize.SIZE_LG};
`;

const StyledText = styled.p`
  margin: auto;

  @media ${Breakpoint.MOBILE_LG} {
    margin: 0;
    text-align: left;
  }
`;

const CardContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;

  @media ${Breakpoint.MOBILE_LG} {
    flex-direction: row;
    justify-content: left;
    gap: 2rem;
  }
`;

function About() {
  const overview = content.sections.find(
    (section) => section.title === "overview"
  )?.content;
  const interests = content.sections.find(
    (section) => section.title === "interests"
  )?.content;

  const getHeading = (text, key) => (
    <Typography
      textAlign="center"
      key={key}
      tag={TypographyConstants.SECTION_TITLE_TAG}
    >
      {text}
    </Typography>
  );

  return (
    <PageContentLayout>
      <SectionLayout>
        <ContentLayout>
          <Overview>
            {overview.headings.map((heading, index) =>
              getHeading(heading, index)
            )}
            {overview.text.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </Overview>
        </ContentLayout>
      </SectionLayout>
      <SectionLayout>
        <ContentLayout>
          {interests.headings.map((heading, index) =>
            getHeading(heading, index)
          )}
          <CardsContainer>
            {interests.text.map((text, index) => (
              <StyledCard key={index}>
                <CardContent>
                  <StyledIcon
                    icon={interests.icons[index]}
                    key={index}
                    fixedWidth
                  />
                  <StyledText>{text}</StyledText>
                </CardContent>
              </StyledCard>
            ))}
          </CardsContainer>
        </ContentLayout>
      </SectionLayout>
    </PageContentLayout>
  );
}

export default About;

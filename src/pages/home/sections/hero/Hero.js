import styled, { css } from "styled-components";
import { Breakpoint, Layout } from "constants/layout";
import DeveloperSetup from "components/illustrations/DeveloperSetup.svg";
import { Typography as TypographyConstants } from "constants/typography";
import { Style } from "constants/style";
import { useLayoutEffect, useRef, useState } from "react";
import { HeroLayout } from "components/layout/Layout";

const Container = styled(HeroLayout)`
  width: 100%;
  padding: 0 ${Layout.SECTION_PADDING};
  background-color: #4e5c53;
  padding-bottom: 0;
`;

const Content = styled.div`
  width: 100%;
  max-width: ${Layout.CONTENT_MAX_WIDTH};
  margin-top: ${Layout.HEADER_HEIGHT};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${Layout.GAP_MD};
  border-radius: ${Style.BORDER_RADIUS};

  @media ${Breakpoint.MOBILE_LG} {
    gap: ${Layout.GAP_LG};
  }
`;

const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${Layout.GAP_MD};
  padding: ${Layout.PADDING_LG} 0;
`;

const headingStyle = css`
  width: 100%;
  text-align: center;
  text-shadow: ${TypographyConstants.TEXT_SHADOW};
`;

const Heading = styled.div`
  ${headingStyle}
`;

const SubHeading = styled.div`
  ${headingStyle}
  & > * {
    color: #a1b6c4;
    font-weight: normal;
  }
`;

const ImageContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Image = styled.img`
  width: 45%;

  @media ${Breakpoint.TABLET} {
    width: 75%;
  }
`;

function Hero({ data }) {
  const [multiLineHeading, setMultiLineHeading] = useState(false);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const observeTarget = sectionRef.current;

    if (!observeTarget) {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.borderBoxSize[0].inlineSize;
        setMultiLineHeading(width <= 600 ? true : false);
      }
    });

    resizeObserver.observe(observeTarget);

    return () => resizeObserver.unobserve(observeTarget);
  }, []);

  const headings = multiLineHeading ? data.headings : [data.headings.join(" ")];

  const subHeadings = multiLineHeading
    ? data.subHeadings
    : [data.subHeadings.join(" ")];

  return (
    <Container ref={sectionRef}>
      <Content>
        <HeadingContainer>
          <Heading>
            {headings.map((line) => (
              <h1>{line}</h1>
            ))}
          </Heading>
          <SubHeading>
            {subHeadings.map((line) => (
              <h4>{line}</h4>
            ))}
          </SubHeading>
        </HeadingContainer>
        <ImageContainer>
          <Image
            src={DeveloperSetup}
            alt="Desk with chair and computer monitor"
          />
        </ImageContainer>
      </Content>
    </Container>
  );
}

export default Hero;

import styled from "styled-components";
import LandingLayout from "../../components/layout/LandingLayout";
import Terminal from "../../components/Terminal";
import {
  CONTENT_MAX_WIDTH,
  LARGE_GAP,
  LARGE_PADDING,
  MEDIA_QUERY_BREAKPOINT_LG,
  MEDIA_QUERY_BREAKPOINT_MED,
} from "../../constants/StyleConstants";

const Content = styled.div`
  max-width: ${CONTENT_MAX_WIDTH};
  height: max-content;
  padding-top: ${LARGE_PADDING};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${LARGE_GAP};
`;

const Heading = styled.h1`
  color: #bde7f4;
  text-shadow: 0.25rem 0.25rem 2rem rgba(0, 0, 0, 0.3);
  text-align: center;
  font-weight: bold;
`;

const StyledTerminal = styled.div`
  width: 80%;

  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_LG}) {
    width: 90%;
  }

  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_MED}) {
    width: 95%;
  }
`;

function LandingSection({ content }) {
  return (
    <LandingLayout>
      <Content>
        <Heading>
          {content.heading.map((line, index) => (
            <div key={index}>
              <span>{line}</span>
              <br />
            </div>
          ))}
        </Heading>
        <StyledTerminal>
          <Terminal details={content.terminal} />
        </StyledTerminal>
      </Content>
    </LandingLayout>
  );
}

export default LandingSection;

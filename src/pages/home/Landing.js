import styled from "styled-components";
import { ContentLayout, LandingLayout } from "../../components/layout/Layout";
import Terminal from "../../components/Terminal";
import {
  LARGE_GAP,
  LARGE_PADDING,
  MEDIA_QUERY_BREAKPOINT_LG,
  MEDIA_QUERY_BREAKPOINT_MED,
} from "../../constants/StyleConstants";

const Content = styled(ContentLayout)`
  height: max-content;
  padding-top: ${LARGE_PADDING};
  justify-content: center;
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
    width: 100%;
  }
`;

function Landing({ content }) {
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

export default Landing;

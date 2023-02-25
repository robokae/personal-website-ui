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
import { terminalDetails } from "../../data/home";

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

const StyledTerminal = styled.div`
  width: 80%;

  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_LG}) {
    width: 90%;
  }

  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_MED}) {
    width: 95%;
  }
`;

function LandingSection() {
  return (
    <LandingLayout>
      <Content>
        <h1 className="landing-section__heading">
          Hello there!
          <br />
          My name is Alexander Hom.
        </h1>
        <StyledTerminal>
          <Terminal terminalDetails={terminalDetails} />
        </StyledTerminal>
      </Content>
    </LandingLayout>
  );
}

export default LandingSection;

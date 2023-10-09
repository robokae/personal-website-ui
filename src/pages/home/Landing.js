import styled from "styled-components";
import { ContentLayout, LandingLayout } from "../../components/layout/Layout";
import { LARGE_GAP, LARGE_PADDING } from "../../constants/StyleConstants";

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
      </Content>
    </LandingLayout>
  );
}

export default Landing;

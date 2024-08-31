import styled from "styled-components";
import { BaseLayout, ContentLayout } from "./layout/Layout";
import { Breakpoint } from "constants/layout";

const JumbotronLayout = styled(BaseLayout)`
  padding: 5rem 0;
  background-color: ${(props) =>
    props.bgCol ? "" : ({ theme }) => theme.jumbotronBgCol};
`;

const StyledText = styled.p`
  font-size: 2.5rem;

  @media ${Breakpoint.TABLET} {
    font-size: 1.5rem;
  }
`;

function Jumbotron({ heading, text, callToAction }) {
  return (
    <JumbotronLayout>
      <ContentLayout>
        {heading && <h2>{heading}</h2>}
        {text && <StyledText>{text}</StyledText>}
        {callToAction && callToAction}
      </ContentLayout>
    </JumbotronLayout>
  );
}

export default Jumbotron;

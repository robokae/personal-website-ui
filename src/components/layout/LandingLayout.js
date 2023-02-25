import styled from "styled-components";
import { HEADER_HEIGHT } from "../../constants/StyleConstants";
import { BaseLayout } from "./BaseLayout";

const Landing = styled(BaseLayout)`
  padding-top: ${HEADER_HEIGHT};
  background: ${({ theme }) => theme.landingBg};
`;

function LandingLayout(props) {
  return <Landing>{props.children}</Landing>;
}

export default LandingLayout;

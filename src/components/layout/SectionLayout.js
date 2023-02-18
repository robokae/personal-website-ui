import styled from "styled-components";
import { SECTION_PADDING } from "../../constants/StyleConstants";
import { BaseLayout } from "./BaseLayout";

const Section = styled(BaseLayout)`
  padding: ${SECTION_PADDING};
`;

export default Section;

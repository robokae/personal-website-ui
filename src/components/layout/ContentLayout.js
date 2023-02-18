import styled from "styled-components";
import {
  CONTENT_MAX_WIDTH,
  MEDIA_QUERY_BREAKPOINT_XL,
} from "../../constants/StyleConstants";
import { BaseLayout } from "./BaseLayout";

const Content = styled(BaseLayout)`
  max-width: ${CONTENT_MAX_WIDTH};
  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_XL}) {
    width: 95%;
  }
`;

export default Content;

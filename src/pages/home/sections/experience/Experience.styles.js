import styled from "styled-components";
import {
  CARD_PADDING,
  MEDIA_QUERY_BREAKPOINT_LG,
  MEDIUM_GAP,
} from "../../../../constants/LayoutConstants";
import {
  BORDER_RADIUS,
  CARD_TITLE_HTML_TAG,
} from "../../../../constants/StyleConstants";

export const CardLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: ${MEDIUM_GAP};
  position: relative;

  & > * {
    height: auto;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${CARD_PADDING};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${BORDER_RADIUS} ${BORDER_RADIUS} 0 0;

  @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_LG}) {
    padding: 0.5rem 0;
    flex-direction: column;
    align-items: flex-start;

    & > ${CARD_TITLE_HTML_TAG} {
      font-size: 1.25rem;
    }
  }
`;

export const CardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${CARD_PADDING};
  gap: ${MEDIUM_GAP};
`;

export const List = styled.ul`
  :not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.lineCol};
  }
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 1rem;
`;

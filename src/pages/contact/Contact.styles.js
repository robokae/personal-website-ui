import styled from "styled-components";
import { Breakpoint, Layout } from "constants/layout";
import { Link } from "components/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "components/icon/Icon";

export const SubHeading = styled.p`
  text-align: center;

  @media ${Breakpoint.LAPTOP} {
    width: 80%;
  }

  @media ${Breakpoint.MOBILE_LG} {
    width: 100%;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: ${Layout.GAP_MD};
  height: max-content;

  @media ${Breakpoint.LAPTOP} {
    grid-template-columns: 1fr;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: ${Layout.GAP_SM};
  margin-top: auto;
  color: ${({ theme }) => theme.accentCol};
`;

export const AnimatedIcon = styled(FontAwesomeIcon)`
  transition: all 0.2s ease-in-out;
  transform: translateX(${(props) => (props.isHovered ? "0.5rem" : "0")});
`;

export const StyledIcon = styled(Icon)`
  font-size: 1.5rem;
`;

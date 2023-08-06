import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CARD_PADDING, BORDER_RADIUS } from "../../../constants/StyleConstants";

export const Container = styled.div`
  height: 100%;
  padding: ${CARD_PADDING};
  background-color: ${({ theme }) => theme.secondaryBgCol};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${BORDER_RADIUS};
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const Tag = styled.p`
  font-size: 0.9rem;
  background-color: ${({ theme }) => theme.tagCol};
  padding: 0.1rem 0.75rem;
  border-radius: 5rem;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  margin-top: auto;
`;

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.accentCol};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const AnimatedIcon = styled(FontAwesomeIcon)`
  animation: ${(props) =>
    props.$animate ? "0.25s ease-in-out slideRight" : ""};
  animation-fill-mode: forwards;
  @keyframes slideRight {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(0.5rem);
    }
  }
`;

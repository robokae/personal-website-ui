import styled from "styled-components";
import { BORDER_RADIUS, CARD_PADDING } from "../../../constants/StyleConstants";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.secondaryBgCol};
  border-radius: ${BORDER_RADIUS};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const GraphicsContainer = styled.div`
  min-height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${BORDER_RADIUS};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export const GradientContainer = styled(GraphicsContainer)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem 0;
  color: #f5f5f5;
  background: ${(props) =>
    `linear-gradient(
      ${props.$gradientDirection}, 
      ${props.$gradientLeft}, 
      ${props.$gradientRight})`};
  font-size: 3rem;
  text-shadow: 0.25rem 0.25rem 2rem rgba(0, 0, 0, 0.3);
`;

export const PhotoContainer = styled(GraphicsContainer)``;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: ${CARD_PADDING};
  padding-top: 1rem;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
  padding: 0.25rem 0;
`;

export const List = styled.ul`
  margin-left: 0.5rem;
  padding-left: 1rem;
`;

export const ListItem = styled.li`
  list-style-position: outside;
`;

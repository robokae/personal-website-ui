import styled from "styled-components";
import {
  BORDER_RADIUS,
  CARD_PADDING,
  MEDIA_QUERY_BREAKPOINT_SM,
} from "../../constants/StyleConstants";

const Container = styled.div`
  padding: ${CARD_PADDING};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.secondaryBgCol};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${BORDER_RADIUS};
  transition: transform 0.2s ease-in-out;

  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_SM}) {
    display: grid;
    grid-template-columns: 1fr 5fr;
    text-align: left;
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  color: ${(props) =>
    props.col ? props.col : ({ theme }) => theme.primaryFontCol};

  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_SM}) {
    justify-self: center;
  }
`;

function IconTextCard({ icon, iconCol, text }) {
  return (
    <Container>
      <Icon col={iconCol}>{icon}</Icon>
      <p>{text}</p>
    </Container>
  );
}

export default IconTextCard;

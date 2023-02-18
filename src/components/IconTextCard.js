import styled from "styled-components";
import { BORDER_RADIUS } from "../constants/StyleConstants";

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.secondaryBgCol};
  border: 1px solid ${({ theme }) => theme.lineCol};
  border-radius: ${BORDER_RADIUS};
`;

const Icon = styled.div`
  font-size: 2rem;
  color: ${(props) =>
    props.col ? props.col : ({ theme }) => theme.primaryFontCol};
`;

const Text = styled.p`
  font-size: 0.9rem;
`;

function IconTextCard({ icon, iconCol, text }) {
  return (
    <Container>
      <Icon col={iconCol}>{icon}</Icon>
      <Text>{text}</Text>
    </Container>
  );
}

export default IconTextCard;

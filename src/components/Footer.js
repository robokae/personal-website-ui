import styled from "styled-components";
import { FOOTER_HEIGHT } from "../constants/StyleConstants";
import { getYear } from "../util/DateUtil";

const Container = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: ${FOOTER_HEIGHT};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.lineCol};
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Footer({ textContent }) {
  return (
    <Container>
      <Content>
        {textContent &&
          textContent.map((text, index) => <p key={index}>{text}</p>)}
        <p>Alexander Hom {getYear()}</p>
      </Content>
    </Container>
  );
}

export default Footer;

import styled from "styled-components";
import { getYear } from "../../util/DateUtil";
import { FOOTER_HEIGHT } from "../../constants/LayoutConstants";
import styles from "./Footer.module.scss";

const Container = styled.div`
  height: ${FOOTER_HEIGHT};
  border-top: 1px solid ${({ theme }) => theme.lineCol};
`;

function Footer({ textContent }) {
  return (
    <Container className={styles.container}>
      <div className={styles.content}>
        {textContent &&
          textContent.map((text, index) => <p key={index}>{text}</p>)}
        <p>Alexander Hom {getYear()}</p>
      </div>
    </Container>
  );
}

export default Footer;

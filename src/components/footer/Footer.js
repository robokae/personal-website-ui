import styled from "styled-components";
import { getYear } from "../../util/DateUtil";
import styles from "./Footer.module.scss";
import { Layout } from "constants/layout";

const Container = styled.div`
  height: ${Layout.FOOTER_HEIGHT};
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

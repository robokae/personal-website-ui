import { getYear } from "../../util/DateUtil";
import { useResize } from "hooks/useResize";
import { useEffect, useState } from "react";
import { DeviceSize } from "constants/layout";
import { Container, Content, Dot } from "./Footer.styles";

function Footer({ textContent }) {
  const { width } = useResize();
  const [isCompactFooter, setIsCompactFooter] = useState(false);

  useEffect(() => {
    setIsCompactFooter(width >= DeviceSize.TABLET);
  }, [width]);

  return (
    <Container>
      <Content compact={isCompactFooter}>
        {textContent &&
          textContent.map((text, index) => <p key={index}>{text}</p>)}
        {isCompactFooter && <p>&bull;</p>}
        <p>{getYear()}</p>
      </Content>
    </Container>
  );
}

export default Footer;

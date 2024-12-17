import { getYear } from "../../util/DateUtil";
import { useResize } from "hooks/useResize";
import { useEffect, useState } from "react";
import { DeviceSize } from "constants/layout";
import {
  Caption,
  CaptionContainer,
  Container,
  Content,
  LinkContainer,
} from "./Footer.styles";
import footer from "content/layout/footer.json";
import { UnderlinedLink } from "components/Link";

function Footer() {
  const { width } = useResize();
  const [isCompactFooter, setIsCompactFooter] = useState(false);
  const currentYear = getYear();
  const { links } = footer.sections.find(
    (section) => section.title === "navLinks"
  )?.content;
  const caption = footer.sections.find((section) => section.title === "caption")
    ?.content.text[0];

  useEffect(() => {
    setIsCompactFooter(width > DeviceSize.MOBILE_MD);
  }, [width]);

  return (
    <Container>
      <Content>
        <LinkContainer>
          {links &&
            links.map((link, index) => (
              <UnderlinedLink key={index} to={link.to}>
                {link.label}
              </UnderlinedLink>
            ))}
        </LinkContainer>
        <CaptionContainer compact={isCompactFooter}>
          {caption && (
            <Caption>
              <span>{caption}</span>
              {isCompactFooter && <span>&bull;</span>}
              <span>{currentYear}</span>
            </Caption>
          )}
        </CaptionContainer>
      </Content>
    </Container>
  );
}

export default Footer;

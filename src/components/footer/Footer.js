import { getYear } from "../../util/DateUtil";
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
  const currentYear = getYear();
  const { links } = footer.sections.find(
    (section) => section.title === "navLinks"
  )?.content;
  const caption = footer.sections.find((section) => section.title === "caption")
    ?.content.text[0];

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
        <CaptionContainer>
          {caption && <Caption>{`${caption} ${currentYear}`}</Caption>}
        </CaptionContainer>
      </Content>
    </Container>
  );
}

export default Footer;

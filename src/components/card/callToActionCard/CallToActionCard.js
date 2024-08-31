import { useState } from "react";
import { Typography as TypographyConstants } from "constants/typography";
import {
  AnimatedIcon,
  Container,
  Content,
  Link,
  LinkContainer,
  Tag,
  TagContainer,
} from "./CallToActionCard.styles";
import Typography from "typography/Typography";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

/**
 * Text card with optional tags and up to two CTA links
 * @param heading the heading displayed on the card
 * @param tags array of tags
 * @param description text displayed under the heading and tags
 * @param CTA links
 */
function CallToActionCard({ heading, tags, description, links }) {
  const [animateIcon, setAnimateIcon] = useState({});
  return (
    <Container>
      <Content>
        <Typography tag={TypographyConstants.CARD_TITLE_TAG}>
          {heading}
        </Typography>
        <TagContainer>
          {tags.map((e, index) => (
            <Tag key={index}>{e}</Tag>
          ))}
        </TagContainer>
        <p>{description}</p>
        <LinkContainer>
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              onMouseEnter={() =>
                setAnimateIcon({ linkId: index, animate: true })
              }
              onMouseLeave={() =>
                setAnimateIcon({ linkId: index, animate: false })
              }
            >
              <p>{link.title}</p>
              <AnimatedIcon
                $animate={animateIcon.linkId === index && animateIcon.animate}
                icon={faChevronRight}
              />
            </Link>
          ))}
        </LinkContainer>
      </Content>
    </Container>
  );
}

export default CallToActionCard;

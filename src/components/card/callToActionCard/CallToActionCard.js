import { useState } from "react";
import { RIGHT_CHEVRON_ICON } from "../../../constants/StyleConstants";
import {
  AnimatedIcon,
  Container,
  Content,
  Link,
  LinkContainer,
  Tag,
  TagContainer,
} from "./CallToActionCard.styles";
import { CardHeading } from "../../typography/Heading";

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
        <CardHeading>{heading}</CardHeading>
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
                icon={RIGHT_CHEVRON_ICON}
              />
            </Link>
          ))}
        </LinkContainer>
      </Content>
    </Container>
  );
}

export default CallToActionCard;

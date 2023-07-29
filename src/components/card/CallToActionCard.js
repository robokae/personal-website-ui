import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  BORDER_RADIUS,
  CARD_PADDING,
  RIGHT_CHEVRON_ICON,
} from "../../constants/StyleConstants";

const Container = styled.div`
  height: 100%;
  padding: ${CARD_PADDING};
  background-color: ${({ theme }) => theme.secondaryBgCol};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${BORDER_RADIUS};
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const Tag = styled.p`
  font-size: 0.9rem;
  background-color: ${({ theme }) => theme.tagCol};
  padding: 0.1rem 0.75rem;
  border-radius: 5rem;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  margin-top: auto;
`;

const Link = styled(NavLink)`
  color: ${({ theme }) => theme.accentCol};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

const AnimatedIcon = styled(FontAwesomeIcon)`
  animation: ${(props) =>
    props.$animate ? "0.25s ease-in-out slideRight" : ""};
  animation-fill-mode: forwards;
  @keyframes slideRight {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(0.5rem);
    }
  }
`;

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
        <h4>{heading}</h4>
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

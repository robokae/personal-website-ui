import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  BORDER_RADIUS,
  CARD_PADDING,
  RIGHT_ARROW_ICON,
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
  gap: 2.5rem;
  margin-top: auto;
`;

const Link = styled(NavLink)`
  color: ${({ theme }) => theme.primaryFontCol};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

function ItemDetailCard({ name, tags, description, links }) {
  return (
    <Container>
      <Content>
        <h4>{name}</h4>
        <TagContainer>
          {tags.map((e, index) => (
            <Tag key={index}>{e}</Tag>
          ))}
        </TagContainer>
        <p>{description}</p>
        <LinkContainer>
          {links.map((link, index) => (
            <Link key={index} to={link.url}>
              <p>{link.title}</p>
              <FontAwesomeIcon icon={RIGHT_ARROW_ICON} />
            </Link>
          ))}
        </LinkContainer>
      </Content>
    </Container>
  );
}

export default ItemDetailCard;

import styled from "styled-components";
import { BORDER_RADIUS, CARD_PADDING } from "../../constants/StyleConstants";

const Container = styled.div`
  padding: ${CARD_PADDING};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.secondaryBgCol};
  border-radius: ${BORDER_RADIUS};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Heading = styled.h4`
  padding: 0.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.lineCol};
`;

const List = styled.ul`
  margin-left: 0.5rem;
  padding-left: 1rem;
`;

const ListItem = styled.li`
  list-style-position: outside;
`;

function TextCard({ content }) {
  return (
    <Container>
      <Content>
        <Heading>{content.heading}</Heading>
        <p>{content.body}</p>
        {content.bulletPoints && (
          <List>
            {content.bulletPoints.map((bp, index) => (
              <ListItem key={index}>{bp}</ListItem>
            ))}
          </List>
        )}
      </Content>
    </Container>
  );
}

export default TextCard;

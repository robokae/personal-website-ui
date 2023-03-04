import styled from "styled-components";
import { BORDER_RADIUS } from "../../constants/StyleConstants";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.secondaryBgCol};
  border: 1px solid ${({ theme }) => theme.lineCol};
  border-radius: ${BORDER_RADIUS};
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

const Heading = styled.h4`
  padding: 0.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.lineCol};
`;

const List = styled.ul`
  margin-left: 0.5rem;
`;

const ListItem = styled.li`
  list-style-position: inside;
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

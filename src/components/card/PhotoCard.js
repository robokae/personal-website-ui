import styled from "styled-components";
import {
  BORDER_RADIUS,
  CARD_PADDING,
  GRADIENT_DIRECTIONS,
} from "../../constants/StyleConstants";
import { gradientPalette } from "../../global/colors";
import getRandomGradient from "../../util/GradientGenerator";

const Container = styled.div`
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
`;

const GraphicsContainer = styled.div`
  min-height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${BORDER_RADIUS};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

const GradientContainer = styled(GraphicsContainer)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem 0;
  color: #f5f5f5;
  background: ${(props) =>
    `linear-gradient(
      ${props.$gradientDirection}, 
      ${props.$gradientLeft}, 
      ${props.$gradientRight})`};
  font-size: 3rem;
  text-shadow: 0.25rem 0.25rem 2rem rgba(0, 0, 0, 0.3);
`;

const PhotoContainer = styled(GraphicsContainer)``;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: ${CARD_PADDING};
  padding-top: 1rem;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
  padding: 0.25rem 0;
`;

const List = styled.ul`
  margin-left: 0.5rem;
  padding-left: 1rem;
`;

const ListItem = styled.li`
  list-style-position: outside;
`;

function PhotoCard({ content, photo, gradient }) {
  let gradientColors = gradient ? getRandomGradient(gradientPalette) : null;
  return (
    <Container>
      <Content>
        <div>
          {gradient ? (
            <GradientContainer
              $gradientLeft={gradientColors.colorLeft}
              $gradientRight={gradientColors.colorRight}
              $gradientDirection={GRADIENT_DIRECTIONS.TO_RIGHT}
            >
              {photo}
              <Heading>
                <h4>{content.heading}</h4>
              </Heading>
            </GradientContainer>
          ) : (
            <PhotoContainer>{photo}</PhotoContainer>
          )}
        </div>
        <TextContent>
          <p>{content.body}</p>
          {content.bulletPoints && (
            <List>
              {content.bulletPoints.map((bp, index) => (
                <ListItem key={index}>{bp}</ListItem>
              ))}
            </List>
          )}
        </TextContent>
      </Content>
    </Container>
  );
}

export default PhotoCard;

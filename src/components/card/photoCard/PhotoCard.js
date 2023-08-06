import { GRADIENT_DIRECTIONS } from "../../../constants/StyleConstants";
import { gradientPalette } from "../../../global/colors";
import getRandomGradient from "../../../util/GradientGenerator";
import { CardHeading } from "../../typography/Heading";
import {
  Container,
  Content,
  GradientContainer,
  List,
  ListItem,
  PhotoContainer,
  TextContent,
} from "./PhotoCard.styles";

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
              <CardHeading>{content.heading}</CardHeading>
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

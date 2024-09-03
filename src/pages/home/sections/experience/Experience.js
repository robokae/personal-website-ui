import Card from "components/card/Card";
import { ContentLayout, SectionLayout } from "components/layout/Layout";
import Typography from "components/typography/Typography";
import { Color } from "constants/color";
import { useEffect, useState } from "react";
import Carousel from "components/carousel/Carousel";
import { DeviceSize, Layout } from "constants/layout";
import { Typography as TypographyConstants } from "constants/typography";
import {
  CardContent,
  CardHeader,
  CardLayout,
  Content,
  List,
  ListItem,
  Section,
} from "./Experience.styles";

const Experience = ({ data }) => {
  const testLargeWindowSize = () => window.innerWidth <= DeviceSize.TABLET;
  const { headings, subHeadings, text, listContent } = data;
  const cardHeadingColors = [
    Color.LIGHT_TURQUOISE,
    Color.LIGHT_NAVY_BLUE,
    Color.MEDIUM_BLUE,
  ];

  const [displayCarousel, setDisplayCarousel] = useState(testLargeWindowSize);

  useEffect(() => {
    const handleResize = () => {
      setDisplayCarousel(testLargeWindowSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getCards = () => {
    return subHeadings.map((subHeading, index) => {
      return (
        <Card key={index} padding={0} gap={0}>
          <CardHeader backgroundColor={cardHeadingColors[index]}>
            <Typography
              textAlign="center"
              tag={TypographyConstants.CARD_TITLE_TAG}
            >
              {subHeading}
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography>{text[index]}</Typography>
            <List>
              {listContent[index].map((listItem, index) => (
                <ListItem key={index}>{listItem}</ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      );
    });
  };

  const heading = headings.map((line, index) => (
    <Typography
      textAlign="center"
      key={index}
      tag={TypographyConstants.SECTION_TITLE_TAG}
    >
      {line}
    </Typography>
  ));

  return (
    <Section>
      <Content>
        {heading}
        {displayCarousel ? (
          <Carousel displayArrows paddingX={Layout.SECTION_PADDING}>
            {getCards()}
          </Carousel>
        ) : (
          <CardLayout size={subHeadings.length}>{getCards()}</CardLayout>
        )}
      </Content>
    </Section>
  );
};

export default Experience;

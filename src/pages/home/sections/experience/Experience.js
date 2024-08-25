import Card from "../../../../components/card/Card";
import {
  ContentLayout,
  SectionLayout,
} from "../../../../components/layout/Layout";
import Typography from "../../../../components/typography/Typography";
import {
  CARD_TITLE_HTML_TAG,
  SECTION_TITLE_HTML_TAG,
} from "../../../../constants/StyleConstants";
import {
  LIGHT_NAVY_BLUE,
  LIGHT_TURQUOISE,
  MEDIUM_BLUE,
} from "../../../../constants/ColorConstants";
import { useState } from "react";
import { useEffect } from "react";
import Carousel from "../../../../components/carousel/Carousel";
import { CAROUSEL_PADDING } from "../../../../constants/LayoutConstants";
import {
  CardContent,
  CardHeader,
  CardLayout,
  List,
  ListItem,
} from "./Experience.styles";

const Experience = ({ data }) => {
  const testLargeWindowSize = () => window.innerWidth <= 992;
  const { headings, subHeadings, text, listContent } = data;
  const cardHeadingColors = [LIGHT_TURQUOISE, LIGHT_NAVY_BLUE, MEDIUM_BLUE];

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
            <Typography textAlign="center" tag={CARD_TITLE_HTML_TAG}>
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
    <Typography key={index} tag={SECTION_TITLE_HTML_TAG} textAlign="center">
      {line}
    </Typography>
  ));

  return (
    <SectionLayout>
      {heading}
      {displayCarousel ? (
        <Carousel displayArrows paddingX={CAROUSEL_PADDING}>
          {getCards()}
        </Carousel>
      ) : (
        <ContentLayout>
          <CardLayout size={subHeadings.length}>{getCards()}</CardLayout>
        </ContentLayout>
      )}
    </SectionLayout>
  );
};

export default Experience;

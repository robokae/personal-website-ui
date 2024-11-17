import Card from "components/card/Card";
import Typography from "components/typography/Typography";
import React, { useEffect, useState } from "react";
import Carousel from "components/carousel/Carousel";
import { DeviceSize, Layout } from "constants/layout";
import { Typography as TypographyConstants } from "constants/typography";
import { CardHeader, CardLayout, Content, Section } from "./Experience.styles";
import { useResize } from "hooks/useResize";

const Experience = ({ data }) => {
  const { headings, subHeadings, text, listContent } = data;

  const [displayCarousel, setDisplayCarousel] = useState();
  const { width } = useResize();

  useEffect(() => {
    setDisplayCarousel(width <= DeviceSize.TABLET);
  }, [width]);

  const cards = () =>
    subHeadings.map((subHeading, index) => (
      <Card key={index}>
        <CardHeader>
          <Typography textAlign="left" tag={TypographyConstants.CARD_TITLE_TAG}>
            {subHeading}
          </Typography>
        </CardHeader>
        <Typography>{text[index]}</Typography>
      </Card>
    ));

  return (
    <Section>
      <Content>
        {headings.map((line, index) => (
          <Typography
            textAlign="left"
            key={index}
            tag={TypographyConstants.SECTION_TITLE_TAG}
          >
            {line}
          </Typography>
        ))}
        {displayCarousel ? (
          <Carousel arrows paddingX={Layout.SECTION_PADDING}>
            {cards()}
          </Carousel>
        ) : (
          <CardLayout size={subHeadings.length}>{cards()}</CardLayout>
        )}
      </Content>
    </Section>
  );
};

export default Experience;

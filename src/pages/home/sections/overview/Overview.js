import Card from "components/card/Card";
import { ContentLayout, SectionLayout } from "components/layout/Layout";
import Typography from "components/typography/Typography";
import { Color } from "constants/color";
import { Layout } from "constants/layout";
import { Typography as TypographyConstants } from "constants/typography";
import { Grid } from "./Overview.styles";
import Icon from "components/icon/Icon";

const Overview = ({ data }) => {
  const { headings, text, icons } = data;
  const ICON_COLOR = Color.NAVY_BLUE;
  const ICON_BACKGROUND_COLORS = [
    Color.LIGHT_PURPLE,
    Color.TURQUOISE,
    Color.LIGHT_BLUE,
    Color.LIGHT_GREEN,
  ];

  return (
    <SectionLayout>
      <ContentLayout>
        {headings.map((heading) => (
          <Typography
            textAlign="left"
            tag={TypographyConstants.SECTION_TITLE_TAG}
          >
            {heading}
          </Typography>
        ))}
        <Grid gap={Layout.MEDIUM_GAP} size={text.length}>
          {text.map((cardText, index) => {
            return (
              <Card key={index} padding={Layout.CARD_PADDING}>
                <Icon
                  name={icons[index]}
                  backgroundColor={ICON_BACKGROUND_COLORS[index]}
                  color={ICON_COLOR}
                  padding="0.75rem"
                ></Icon>
                <Typography>{cardText}</Typography>
              </Card>
            );
          })}
        </Grid>
      </ContentLayout>
    </SectionLayout>
  );
};

export default Overview;

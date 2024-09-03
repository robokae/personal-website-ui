import Card from "components/card/Card";
import Icon from "components/icon/Icon";
import Grid from "components/layout/Grid";
import { ContentLayout, SectionLayout } from "components/layout/Layout";
import Typography from "components/typography/Typography";
import { Color } from "constants/color";
import { Layout } from "constants/layout";

const Overview = ({ data }) => {
  const { text, icons } = data;
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
        <Grid gap={Layout.MEDIUM_GAP} size={text.length}>
          {text.map((cardText, index) => {
            return (
              <Card key={index} padding={Layout.CARD_PADDING}>
                <Icon
                  name={icons[index]}
                  backgroundColor={ICON_BACKGROUND_COLORS[index]}
                  color={ICON_COLOR}
                  padding="1rem"
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

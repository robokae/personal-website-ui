import Card from "../../../components/card/Card";
import Icon from "../../../components/icon/Icon";
import Grid from "../../../components/layout/Grid";
import {
  ContentLayout,
  SectionLayout,
} from "../../../components/layout/Layout";
import Typography from "../../../components/typography/Typography";
import { CARD_PADDING, MED_ICON_SIZE } from "../../../constants/StyleConstants";
import { accentColor } from "../../../global/colors";
import { getIcon } from "../../../util/IconUtil";

const Overview = ({ data }) => {
  const cards = data.content.find((item) => item.name === "cards").data;
  let icons;
  return (
    <SectionLayout>
      <ContentLayout>
        <Grid size={cards.length}>
          {cards.map((cardItem, index) => {
            icons = [];
            cardItem.visuals.icons.forEach((icon) => {
              const {
                name,
                details: { type },
              } = icon;
              icons.push(getIcon(name, type));
            });
            return (
              <Card
                padding={`${CARD_PADDING} 0`}
                backgroundColor="transparent"
                key={index}
              >
                <Icon
                  color={accentColor}
                  padding="1rem"
                  fontSize={MED_ICON_SIZE}
                  icon={icons[0]}
                />
                <Typography>{cardItem.text.body}</Typography>
              </Card>
            );
          })}
        </Grid>
      </ContentLayout>
    </SectionLayout>
  );
};

export default Overview;

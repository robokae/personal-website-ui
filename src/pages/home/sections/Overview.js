import Card from "../../../components/card/Card";
import Icon from "../../../components/icon/Icon";
import Grid from "../../../components/layout/Grid";
import {
  ContentLayout,
  SectionLayout,
} from "../../../components/layout/Layout";
import Typography from "../../../components/typography/Typography";
import { CARD_PADDING, MED_ICON_SIZE } from "../../../constants/StyleConstants";
import { accentColor, primaryForegroundColor } from "../../../global/colors";
import { getIcon } from "../../../util/IconUtil";

const Overview = ({ data }) => {
  const { text, icons } = data;
  return (
    <SectionLayout>
      <ContentLayout>
        <Grid size={text.length}>
          {text.map((cardText, index) => {
            return (
              <Card padding={CARD_PADDING} key={index}>
                <Icon
                  backgroundColor={primaryForegroundColor}
                  color={accentColor}
                  padding="1rem"
                  fontSize={MED_ICON_SIZE}
                  icon={getIcon(icons[index].name)}
                />
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

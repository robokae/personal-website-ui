import { ContentLayout, SectionLayout } from "components/layout/Layout";
import Typography from "components/typography/Typography";
import { Color } from "constants/color";
import { Layout } from "constants/layout";
import {
  Grid,
  IconContainer,
  ResponsiveCard,
  ResponsiveIcon,
  TypographyContainer,
} from "./Overview.styles";

const Overview = ({ data }) => {
  const { text, icons } = data;
  const ICON_COLOR = Color.NAVY_BLUE;
  const ICON_BACKGROUND_COLORS = [
    Color.LIGHT_BLUE,
    Color.LIGHT_GREEN,
    Color.LIGHT_PURPLE,
    Color.TURQUOISE,
  ];

  return (
    <SectionLayout>
      <ContentLayout>
        <Grid gap={Layout.MEDIUM_GAP} size={text.length}>
          {text.map((cardText, index) => {
            return (
              <ResponsiveCard key={index}>
                <IconContainer backgroundColor={ICON_BACKGROUND_COLORS[index]}>
                  <ResponsiveIcon
                    icon={icons[index]}
                    backgroundColor={ICON_BACKGROUND_COLORS[index]}
                    color={ICON_COLOR}
                    fixedWidth
                  />
                </IconContainer>
                <TypographyContainer>
                  <Typography>{cardText}</Typography>
                </TypographyContainer>
              </ResponsiveCard>
            );
          })}
        </Grid>
      </ContentLayout>
    </SectionLayout>
  );
};

export default Overview;

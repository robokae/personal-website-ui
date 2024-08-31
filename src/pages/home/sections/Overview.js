import styled from "styled-components";
import Card from "components/card/Card";
import Icon from "components/icon/Icon";
import Grid from "components/layout/Grid";
import { ContentLayout, SectionLayout } from "components/layout/Layout";
import Typography from "components/typography/Typography";
import { Color } from "constants/color";
import { Breakpoint, Layout } from "constants/layout";

const ResponsiveCard = styled.div`
  & > * {
    @media ${Breakpoint.MOBILE_LG} {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
`;

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
              <ResponsiveCard key={index}>
                <Card padding={Layout.CARD_PADDING}>
                  <Icon
                    name={icons[index]}
                    backgroundColor={ICON_BACKGROUND_COLORS[index]}
                    color={ICON_COLOR}
                    padding="1rem"
                  ></Icon>
                  <Typography width="85%">{cardText}</Typography>
                </Card>
              </ResponsiveCard>
            );
          })}
        </Grid>
      </ContentLayout>
    </SectionLayout>
  );
};

export default Overview;

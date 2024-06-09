import styled from "styled-components";
import Card from "../../../components/card/Card";
import Icon from "../../../components/icon/Icon";
import Grid from "../../../components/layout/Grid";
import {
  ContentLayout,
  SectionLayout,
} from "../../../components/layout/Layout";
import Typography from "../../../components/typography/Typography";
import { ICON_SIZE } from "../../../constants/StyleConstants";
import {
  LIGHT_BLUE,
  LIGHT_GREEN,
  LIGHT_PURPLE,
  NAVY_BLUE,
  TURQUOISE,
} from "../../../constants/ColorConstants";
import { getIcon } from "../../../util/IconUtil";
import {
  LARGE_GAP,
  MEDIA_QUERY_BREAKPOINT_SM,
} from "../../../constants/LayoutConstants";

const ResponsiveCardContainer = styled.div`
  & > * {
    @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_SM}) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Overview = ({ data }) => {
  const { text, icons } = data;
  const ICON_COLOR = NAVY_BLUE;
  const ICON_BACKGROUND_COLORS = [
    LIGHT_PURPLE,
    TURQUOISE,
    LIGHT_BLUE,
    LIGHT_GREEN,
  ];

  return (
    <SectionLayout>
      <ContentLayout>
        <Grid gap={LARGE_GAP} size={text.length}>
          {text.map((cardText, index) => {
            return (
              <ResponsiveCardContainer key={index}>
                <Card backgroundColor="transparent" padding="0">
                  <Icon
                    backgroundColor={ICON_BACKGROUND_COLORS[index]}
                    color={ICON_COLOR}
                    padding="1rem"
                    fontSize={ICON_SIZE}
                    icon={getIcon(icons[index].name)}
                  />
                  <Typography width="85%">{cardText}</Typography>
                </Card>
              </ResponsiveCardContainer>
            );
          })}
        </Grid>
      </ContentLayout>
    </SectionLayout>
  );
};

export default Overview;

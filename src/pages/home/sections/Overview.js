import styled from "styled-components";
import Card from "../../../components/card/Card";
import Icon from "../../../components/icon/Icon";
import Grid from "../../../components/layout/Grid";
import {
  ContentLayout,
  SectionLayout,
} from "../../../components/layout/Layout";
import Typography from "../../../components/typography/Typography";
import {
  CARD_PADDING,
  MEDIA_QUERY_BREAKPOINT_SM,
  MED_ICON_SIZE,
} from "../../../constants/StyleConstants";
import {
  ACCENT_COLOR,
  PRIMARY_FOREGROUND_COLOR,
} from "../../../constants/ColorConstants";
import { getIcon } from "../../../util/IconUtil";

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
  return (
    <SectionLayout>
      <ContentLayout>
        <Grid size={text.length}>
          {text.map((cardText, index) => {
            return (
              <ResponsiveCardContainer key={index}>
                <Card padding={CARD_PADDING}>
                  <Icon
                    backgroundColor={PRIMARY_FOREGROUND_COLOR}
                    color={ACCENT_COLOR}
                    padding="1rem"
                    fontSize={MED_ICON_SIZE}
                    icon={getIcon(icons[index].name)}
                  />
                  <Typography>{cardText}</Typography>
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

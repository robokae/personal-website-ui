import Grid from "../../components/layout/Grid";
import { ContentLayout, SectionLayout } from "../../components/layout/Layout";
import { getIcon } from "../../util/IconUtil";
import {
  CardHeading,
  SectionHeading,
} from "../../components/typography/Typography";
import Card from "../../components/card/Card";
import styled from "styled-components";
import Icon from "../../components/icon/Icon";
import BulletList from "../../components/list/bulletList/BulletList";

const CardContent = styled.div``;

function Experience({ heading, content }) {
  return (
    <SectionLayout>
      <ContentLayout>
        <SectionHeading>{heading}</SectionHeading>
        <Grid size={content.length}>
          {content.map((experience, index) => (
            <Card key={index}>
              <CardHeading border>
                <Icon
                  icon={getIcon(experience.icon)}
                  color={({ theme }) => theme.accentCol}
                />
                <span>{experience.heading}</span>
              </CardHeading>
              <CardContent>
                <p>{experience.body}</p>
                <BulletList data={experience.examples} />
              </CardContent>
            </Card>
          ))}
        </Grid>
      </ContentLayout>
    </SectionLayout>
  );
}

export default Experience;

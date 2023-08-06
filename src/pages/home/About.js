import Grid from "../../components/layout/Grid";
import { getIcon } from "../../util/IconUtil";
import IconTextCard from "../../components/card/iconTextCard/IconTextCard";
import { ContentLayout, SectionLayout } from "../../components/layout/Layout";

function About({ content }) {
  return (
    <SectionLayout>
      <ContentLayout>
        <Grid size={content.length}>
          {content.map((aboutItem) => (
            <IconTextCard
              key={aboutItem.id}
              icon={getIcon(aboutItem.icon)}
              iconCol={({ theme }) => theme.accentCol}
              text={aboutItem.description}
            />
          ))}
        </Grid>
      </ContentLayout>
    </SectionLayout>
  );
}

export default About;

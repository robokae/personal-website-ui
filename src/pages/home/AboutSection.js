import Grid from "../../components/layout/Grid";
import { getFontAwesomeIcon } from "../../util/IconUtil";
import Section from "../../components/layout/SectionLayout";
import Content from "../../components/layout/ContentLayout";
import IconTextCard from "../../components/card/IconTextCard";

function AboutSection({ content }) {
  return (
    <Section>
      <Content>
        <Grid size={content.length}>
          {content.map((aboutItem) => (
            <IconTextCard
              key={aboutItem.id}
              icon={getFontAwesomeIcon(aboutItem.icon)}
              iconCol={({ theme }) => theme.accentCol}
              text={aboutItem.description}
            />
          ))}
        </Grid>
      </Content>
    </Section>
  );
}

export default AboutSection;

import { about } from "../../data/home";
import Grid from "../../components/layout/Grid";
import { getFontAwesomeIcon } from "../../util/IconUtil";
import Section from "../../components/layout/SectionLayout";
import Content from "../../components/layout/ContentLayout";
import IconTextCard from "../../components/icon/IconTextCard";

function AboutSection() {
  return (
    <Section>
      <Content>
        <Grid size={about.length}>
          {about.map((aboutItem) => (
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

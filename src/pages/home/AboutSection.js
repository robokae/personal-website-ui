import { about } from "../../data/home";
import IconTextCard from "../../components/IconTextCard";
import Grid from "../../components/layout/Grid";
import { Content, Section } from "../../components/layout/Layout";
import { getFontAwesomeIcon } from "../../util/IconUtil";

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

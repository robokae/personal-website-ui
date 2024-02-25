import Projects from "./Projects";
import Contact from "./contact/Contact";

import home from "../../content/home/home.json";
import projects from "../../content/home/projects.json";
import contact from "../../content/home/contact.json";
import {
  ContentLayout,
  PageContentLayout,
  SectionLayout,
} from "../../components/layout/Layout";
import Typography from "../../components/typography/Typography";
import Grid from "../../components/layout/Grid";
import {
  Description,
  ReflectionContentLayout,
  ReflectionSectionLayout,
  ResponsiveTypography,
} from "./Home.styles";
import Card from "../../components/card/Card";
import {
  CARD_TITLE_HTML_TAG,
  LARGE_PADDING,
  SECTION_TITLE_HTML_TAG,
} from "../../constants/StyleConstants";
import Computer from "../../components/illustrations/ComputerIllustration";
import Hero from "./sections/Hero";
import Overview from "./sections/Overview";

const ReflectionSection = ({ data }) => {
  const description = data.content.find((item) => item.name === "description")
    .data[0].text;
  return (
    <ReflectionSectionLayout>
      <ReflectionContentLayout>
        <Description>
          <ResponsiveTypography>
            <Typography textAlign="left" tag={SECTION_TITLE_HTML_TAG}>
              {description.title}
            </Typography>
          </ResponsiveTypography>
          <Typography textAlign="left">{description.body}</Typography>
        </Description>
        <Computer />
      </ReflectionContentLayout>
    </ReflectionSectionLayout>
  );
};

const ExperienceSection = ({ data }) => {
  const cards = data.content.find((item) => item.name === "cards").data;
  let textData;
  return (
    <SectionLayout>
      <ContentLayout>
        <Typography tag={SECTION_TITLE_HTML_TAG} textAlign="center">
          {data.heading}
        </Typography>
        <Grid size={cards.length}>
          {cards.map((card, index) => {
            textData = card.text;
            let backgroundData = card.visuals.backgrounds[0];
            return (
              <Card
                key={index}
                padding={LARGE_PADDING}
                background={backgroundData.value}
              >
                <Typography tag={CARD_TITLE_HTML_TAG}>
                  {textData.title}
                </Typography>
                <Typography>{textData.body}</Typography>
              </Card>
            );
          })}
        </Grid>
      </ContentLayout>
    </SectionLayout>
  );
};

const ProjectsSection = ({ content }) => {
  return (
    <SectionLayout>
      <ContentLayout></ContentLayout>
    </SectionLayout>
  );
};

const ContactSection = ({ content }) => {};

const getSectionData = (sections, sectionName) => {
  return sections.find((section) => section.name === sectionName);
};

function Home() {
  const sections = home.pageSections;
  const heroSectionData = getSectionData(sections, "hero");
  const overviewSectionData = getSectionData(sections, "overview");
  const reflectionSectionData = getSectionData(sections, "reflection");
  const experienceSectionData = getSectionData(sections, "experience");
  const projectsSectionData = getSectionData(sections, "projects");
  const contactSectionData = getSectionData(sections, "contact");

  return (
    <PageContentLayout>
      <Hero data={heroSectionData} />
      <Overview data={overviewSectionData} />
      <ReflectionSection data={reflectionSectionData} />
      <ExperienceSection data={experienceSectionData} />
      <Projects heading={projects.heading} content={projects.content} />
      <Contact content={contact.content} />
    </PageContentLayout>
  );
}

export default Home;

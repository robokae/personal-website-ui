import home from "content/home/home.json";
import { PageContentLayout } from "components/layout/Layout";
import Reflection from "./sections/reflection/Reflection";
import Experience from "./sections/experience/Experience";
import Hero from "./sections/hero/Hero";
import Overview from "./sections/overview/Overview";

const getSectionData = (sections, sectionName) => {
  return sections.find((section) => section.title === sectionName)?.content;
};

function Home() {
  const sections = home.sections;
  const heroSectionData = getSectionData(sections, "hero");
  const overviewSectionData = getSectionData(sections, "overview");
  const reflectionSectionData = getSectionData(sections, "reflection");
  const experienceSectionData = getSectionData(sections, "experience");

  return (
    <PageContentLayout>
      <Hero data={heroSectionData} />
      <Overview data={overviewSectionData} />
      <Reflection data={reflectionSectionData} />
      <Experience data={experienceSectionData} />
    </PageContentLayout>
  );
}

export default Home;

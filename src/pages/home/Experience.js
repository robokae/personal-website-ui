import PhotoCard from "../../components/card/photoCard/PhotoCard";
import Grid from "../../components/layout/Grid";
import { ContentLayout, SectionLayout } from "../../components/layout/Layout";
import { getIcon } from "../../util/IconUtil";
import { SectionHeading } from "../../components/typography/Heading";

function Experience({ heading, content }) {
  return (
    <SectionLayout>
      <ContentLayout>
        <SectionHeading>{heading}</SectionHeading>
        <Grid size={content.length}>
          {content.map((experience, index) => (
            <PhotoCard
              key={index}
              content={experience}
              photo={getIcon(experience.icon)}
              gradient={true}
            />
          ))}
        </Grid>
      </ContentLayout>
    </SectionLayout>
  );
}

export default Experience;

import Card from "components/card/Card";
import {
  ContentLayout,
  PageContentLayout,
  SectionLayout,
} from "components/layout/Layout";
import Typography from "components/typography/Typography";
import { Typography as TypographyConstants } from "constants/typography";
import content from "content/contact.json";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
  AnimatedIcon,
  CardHeader,
  Cards,
  StyledIcon,
  StyledLink,
  SubHeading,
} from "./Contact.styles";

const AnimatedLink = ({ label, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledLink
      to={url}
      onMouseEnter={() => setIsHovered((prev) => !prev)}
      onMouseLeave={() => setIsHovered((prev) => !prev)}
    >
      {label}
      <AnimatedIcon isHovered={isHovered} icon={faArrowRight} fixedWidth />
    </StyledLink>
  );
};

const OverviewSection = ({ content }) => {
  const { headings, subHeadings } = content;

  return (
    <>
      {headings.map((heading) => (
        <Typography tag={TypographyConstants.H2} textAlign="center">
          {heading}
        </Typography>
      ))}
      {subHeadings.map((subHeading) => (
        <SubHeading>{subHeading}</SubHeading>
      ))}
    </>
  );
};

const DetailsSection = ({ content }) => {
  const { subHeadings, text, icons, links } = content;

  return (
    <Cards>
      {subHeadings.map((subHeading, index) => (
        <Card>
          <CardHeader>
            <StyledIcon icon={icons[index]} />
            <Typography tag={TypographyConstants.CARD_TITLE_TAG}>
              {subHeading}
            </Typography>
          </CardHeader>
          <p>{text[index]}</p>
          {links[index] && (
            <AnimatedLink label={links[index].label} url={links[index].url} />
          )}
        </Card>
      ))}
    </Cards>
  );
};

function Contact() {
  const sections = content.sections;
  const overviewSectionData = sections.find(
    (section) => section.title === "overview"
  )?.content;
  const detailsSectionData = sections.find(
    (section) => section.title === "details"
  )?.content;

  return (
    <PageContentLayout>
      <SectionLayout>
        <ContentLayout>
          <OverviewSection content={overviewSectionData} />
          <DetailsSection content={detailsSectionData} />
        </ContentLayout>
      </SectionLayout>
    </PageContentLayout>
  );
}

export default Contact;

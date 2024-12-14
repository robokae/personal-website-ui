import styled from "styled-components";
import error from "content/error/error.json";
import { LinkButton } from "components/Link";
import { PageContentLayout, SectionLayout } from "components/layout/Layout";
import Typography from "components/typography/Typography";
import { Typography as TypographyConstants } from "constants/typography";

const { content } = error;

function Error() {
  return (
    <PageContentLayout>
      <SectionLayout>
        <Typography tag={TypographyConstants.H2} textAlign="center">
          {content.heading}
        </Typography>
        <p>{content.text}</p>
        <LinkButton to={content.ctaUrl}>{content.ctaText}</LinkButton>
      </SectionLayout>
    </PageContentLayout>
  );
}

export default Error;

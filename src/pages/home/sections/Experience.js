import styled from "styled-components";
import Card from "../../../components/card/Card";
import {
  ContentLayout,
  SectionLayout,
} from "../../../components/layout/Layout";
import Typography from "../../../components/typography/Typography";
import {
  BORDER_RADIUS,
  CARD_PADDING,
  CARD_TITLE_HTML_TAG,
  MEDIA_QUERY_BREAKPOINT_LG,
  MED_GAP,
  SECTION_TITLE_HTML_TAG,
} from "../../../constants/StyleConstants";
import { lightBlue, purple, turquoise } from "../../../global/colors";

const CardLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: ${MED_GAP};

  & > * {
    height: auto;
  }

  @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_LG}) {
    display: grid;
    grid-template-rows: repeat(${(props) => props.size}, 1fr);
    width: 100%;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${CARD_PADDING};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${BORDER_RADIUS} ${BORDER_RADIUS} 0 0;

  @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT_LG}) {
    padding: 0.5rem 0;
    flex-direction: column;
    align-items: flex-start;

    & > ${CARD_TITLE_HTML_TAG} {
      font-size: 1.25rem;
    }
  }
`;

const CardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${CARD_PADDING};
  gap: ${MED_GAP};
`;

const ListItem = styled.li`
  list-style: none;
  padding: 1rem;

  :not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.lineCol};
  }
`;

const Experience = ({ data }) => {
  const { headings, subHeadings, text, listContent } = data;
  const cardHeadingColors = [turquoise, purple, lightBlue];
  return (
    <SectionLayout>
      <ContentLayout>
        {headings.map((line, index) => (
          <Typography
            key={index}
            tag={SECTION_TITLE_HTML_TAG}
            textAlign="center"
          >
            {line}
          </Typography>
        ))}
        <CardLayout size={subHeadings.length}>
          {subHeadings.map((subHeading, index) => {
            return (
              <Card key={index} padding={0} gap={0}>
                <CardHeader backgroundColor={cardHeadingColors[index]}>
                  <Typography textAlign="center" tag={CARD_TITLE_HTML_TAG}>
                    {subHeading}
                  </Typography>
                </CardHeader>
                <CardContent>
                  <Typography>{text[index]}</Typography>
                  <ul>
                    {listContent[index].map((listItem, index) => (
                      <ListItem key={index}>{listItem}</ListItem>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </CardLayout>
      </ContentLayout>
    </SectionLayout>
  );
};

export default Experience;

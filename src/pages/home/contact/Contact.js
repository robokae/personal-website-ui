import {
  ContentLayout,
  SectionLayout,
} from "../../../components/layout/Layout";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Icon from "../../../components/icon/Icon";
import { MEDIA_QUERY_BREAKPOINT_SM } from "../../../constants/StyleConstants";
import { getIcon } from "../../../util/IconUtil";

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  p {
    text-align: center;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.primaryFontCol};
`;

const ContactInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 3rem;

  @media (max-width: ${MEDIA_QUERY_BREAKPOINT_SM}) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

function Contact({ content }) {
  return (
    <SectionLayout id="contact">
      <ContentLayout>
        <h2>{content.heading}</h2>
        <DetailsContainer>
          <p>{content.detailsText}</p>
          <ContactInfoContainer>
            {content.contactInfoList.map((contactInfo, index) => (
              <ContactInfo key={index}>
                <Icon icon={getIcon(contactInfo.icon)} />
                {contactInfo.isLink ? (
                  <StyledLink to={contactInfo.link}>
                    {contactInfo.text}
                  </StyledLink>
                ) : (
                  <p>{contactInfo.text}</p>
                )}
              </ContactInfo>
            ))}
          </ContactInfoContainer>
        </DetailsContainer>
      </ContentLayout>
    </SectionLayout>
  );
}

export default Contact;

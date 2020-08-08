import React from 'react';
import styled from '@emotion/styled';

import { SectionBase, SectionContent } from '../common-styles';
import SectionTitle from '../SectionTitle';

import FAQItem from './FAQItem';
import FAQGradient from './faq.svg';
import FAQGradientExt from './faq-ext.svg';

const Container = styled('div')`
  background-color: #38227D;
  ${SectionBase({
    heightPx: 600,
    extHeightPx: 4096,
    backgroundImage: `url(${FAQGradient}), url(${FAQGradientExt})`,
    backgroundIpadImage: `url(${FAQGradient}), url(${FAQGradientExt})`
  })};
`;

const FAQContainer = styled('div')`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1260px) {
    flex-direction: row;
  }
`;

const FAQColumn = styled('div')`
  flex-grow: 1;
  flex-basis: 0;
  @media screen and (min-width: 1260px) {
    margin-right: 25px;
    :last-child {
      margin-right: 0;
    }
  }
`;

const SponsorshipLink = styled('a')`
  text-decoration: underline;
  color: black !important;
`;

export default ({ id, titleColor }) => (
  <Container id={id}>
    <SectionTitle titleColor={titleColor}>FAQs</SectionTitle>
    <SectionContent>
      <FAQContainer>
        <FAQColumn>
          <FAQItem title="Can I register for ImplementAI?">
            Anyone can participate as long as they are a student for the fall
            semester. Undergraduates, Masters, and PhD students are all welcome.
          </FAQItem>
          <FAQItem title="How many people can I have on my team?">
            You can form teams of up to four people with no restrictions on
            school, province, or experience level.
          </FAQItem>
          <FAQItem title="What should I bring?">
            Bring your student ID and your laptop - and don’t forget your
            chargers! Toiletries are also recommended for hygiene.
          </FAQItem>
        </FAQColumn>
        <FAQColumn>
          <FAQItem title="I'll need help to form a team!">
            We will be having a team formation channel on the slack for you to
            get in contact with anyone who may also be looking for a team!
            Additionally, we will be having a team formation event on the Friday
            before the hackathon.
          </FAQItem>
          <FAQItem title="I am new to AI. Can I still join?">
            Yes - all skill levels are welcome at ImplementAI. More importantly,
            we aim to provide a super-condensed - and fun - learning experience!
          </FAQItem>
          <FAQItem title="How much does it cost to attend?">
            The event is completely free of charge - leave it to us to provide
            the food, swag, and accommodation for the event.
          </FAQItem>
        </FAQColumn>
        <FAQColumn>
          <FAQItem title="What is the application process like?">
            We're looking for creative and enthusiastic people with the skills
            to contribute to cool projects. Since this is an AI themed
            hackathon, we prefer applicants with past AI experience and projects
            - however, don't let this deter you from applying! Show us what
            makes you special and let your enthusiasm shine!
          </FAQItem>
          <FAQItem title="Do you provide travel reimbursements?">
            Unfortunately, we are unable to provide travel reimbursements to
            participants from far away. We hope to do so in the future though!
          </FAQItem>
          <FAQItem title="How can I become a sponsor?">
            Email us at{' '}
            <SponsorshipLink href="mailto:mcgillaicontact@gmail.com">
              mcgillaicontact@gmail.com
            </SponsorshipLink>
            .
          </FAQItem>
        </FAQColumn>
      </FAQContainer>
    </SectionContent>
  </Container>
);

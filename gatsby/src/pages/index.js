import React, { useEffect } from 'react';
import HeroTemplate from '../templates/hero';
import DescriptionTemplate from "../templates/description";
import SpeakersTemplate from "../templates/speakers";
import TicketsTemplate from "../templates/tickets";
import ScheduleTemplate from "../templates/schedule";
import { graphql } from 'gatsby';
import ContactTemplate from '../templates/contact';

const Index = ({ data, pageContext, location }) => {
  
  useEffect(() => {
    if (location.state && location.state.position) {
      window.scrollBy(0, location.state.position);
    } 
  })
  const speakersData = data.speakers.nodes;
  return (
    <>
        <HeroTemplate />
        <DescriptionTemplate />
        <SpeakersTemplate />
        <TicketsTemplate />
        <ScheduleTemplate speakersData={speakersData} />
        <ContactTemplate />
    </>
  )
}

export const query = graphql`
  query SpeakersQuery($scheduleRegex: String) {
    speakers: allSanityConfSchedule(filter: {confDay: {regex: $scheduleRegex}}) {
    nodes {
      speakers {
        currentSpeaker {
          name
          description
          image {
            asset {
              fluid(maxWidth: 200) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        speakerTopic {
          topic
        }
        startSpeech
        endSpeech
      }
    }
  }
  }
`;

export default Index;

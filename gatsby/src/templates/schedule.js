import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import styled from 'styled-components';
import NavTabs from "../components/SpeakersFilter";
import Img from "gatsby-image";
import speaker from '../../../sanity/schemas/speaker';
import SpeakersFilter from '../components/SpeakersFilter';

const SectionStyles = styled.section`
  width: 75rem;
  margin: 0 auto;

  @media (min-width: 992px) {
    width: 115rem;
  }
  
  h2 {
    font-size: 3rem;
  }
`;

const ListStyles = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  
  li {
    display: grid;
    grid-template-columns: 10rem 1fr;
    gap: 2rem;
    list-style: none;
    
    time {
      display: block;
      font-weight: 600;
      border-bottom: 2px solid var(--lightGrey);
      padding-bottom: 1rem;
    }
    
    h4 {
      font-weight: 600;
      text-transform: uppercase;
      margin: 1rem 0;
    }
    
    p {
      margin: 0 0 1rem;
    }

    div {
      :first-child {
        width: 10rem;
        
      }
      :last-child {
        
      }
    }
  }
  
`;

const ImgStyles = styled(Img)`
    max-width: 10rem;
    height: auto;
`;

const ScheduleTemplate = () => {
    // // const { speakers } = useStaticQuery(graphql`
    // //     query {
    // //         speakers: allSanitySpeaker {
    // //             nodes {
    // //               description
    // //               schedule {
    // //                 confDay
    // //                 speakerTopic
    // //                 startSpeech
    // //                 endSpeech
    // //               }
    // //               image {
    // //                     asset {
    // //                       fluid(maxWidth: 200) {
    // //                         ...GatsbySanityImageFluid
    // //                       }
    // //                     }
    // //                   }
    // //                 }
    // //                }
    // //               }
    // // `);
    // const filteredArray = speakers.nodes.map(speaker => speaker.schedule.filter(scheduleItem => scheduleItem.confDay === 'Day 1')).flat();
    // console.log(filteredArray);
    return (
        <SectionStyles>
            <h2 className='center'>Event Schedule</h2>
            <SpeakersFilter />
            {/* <NavTabs /> */}
            <ListStyles>
                {/* {
                
                speakers.nodes
                        .filter(speaker => speaker.schedule.some(scheduleItem => scheduleItem.confDay === 'Day 1'))
                      .map(speaker => {
                        const { speakerTopic, startSpeech, endSpeech } = speaker.schedule[0];
                          return (
                              <li>
                                  <div>
                                      <ImgStyles fluid={speaker.image.asset.fluid}/>
                                  </div>
                                  <div>
                                      <time dateTime={startSpeech + 'to' + endSpeech}>{ startSpeech } to { endSpeech }</time>
                                      <h4>{ speakerTopic }</h4>
                                      <p>{ speaker.description }</p>
                                  </div>
                              </li>
                          )
                      })

                   
                    
                } */}
            </ListStyles>
        </SectionStyles>
    )
};

export default ScheduleTemplate;
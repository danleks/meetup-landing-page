import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import styled from 'styled-components';
import NavTabs from "../components/SpeakersFilter";
import Img from "gatsby-image";
import speaker from '../../../sanity/schemas/speaker';
import SpeakersFilter from '../components/SpeakersFilter';

const SectionStyles = styled.section`
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 75rem;
  }

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
  gap: 5rem;
  margin-top: 7rem;
  
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

const ScheduleTemplate = ({ speakersData }) => {   
  const speakers =  speakersData[0].speakers;
    return (
        <SectionStyles id='schedule'>
            <h2 className='center'>Event Schedule</h2>
            <SpeakersFilter />
            <ListStyles>
              {
                speakers.map(speaker => {
                  const { currentSpeaker: { description, image, name }, speakerTopic: { topic }, startSpeech, endSpeech } = speaker;
                  return (
                    <li>
                        <div>
                            <ImgStyles fluid={image.asset.fluid}/>
                        </div>
                        <div>
                            <time dateTime={startSpeech + 'to' + endSpeech}>{ startSpeech } to { endSpeech }</time>
                            <h4>{ topic }</h4>
                            <p>{description }</p>
                        </div>
                    </li>
                  )
                })
              }
            </ListStyles>
        </SectionStyles>
    )
};

export default ScheduleTemplate;
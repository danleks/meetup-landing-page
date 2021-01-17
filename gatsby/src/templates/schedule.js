import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import styled from 'styled-components';
import NavTabs from "../components/NavTabs";
import Img from "gatsby-image";

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
    const { speakers } = useStaticQuery(graphql`
        query {
            speakers: allSanitySpeaker {
                nodes {
                      confDays
                      description
                      topics {
                        topic
                      }
                      image {
                        asset {
                          fluid(maxWidth: 200) {
                            ...GatsbySanityImageFluid
                          }
                        }
                      }
                    }
                   }
                  }
    `);
    return (
        <SectionStyles>
            <h2 className='center'>Event Schedule</h2>
            <NavTabs />
            <ListStyles>
                {
                    speakers.nodes
                        .filter(speaker => speaker.confDays.includes('day1'))
                        .map(speaker => {
                            return (
                                <li>
                                    <div>
                                        <ImgStyles fluid={speaker.image.asset.fluid}/>
                                    </div>
                                    <div>
                                        <time dateTime='10am to 10:30am'>10am to 10:30am</time>
                                        <h4>{ speaker.topics[0].topic }</h4>
                                        <p>{ speaker.description }</p>
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
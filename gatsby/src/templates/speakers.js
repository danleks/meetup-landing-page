import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import {graphql, useStaticQuery} from "gatsby";
import Card from "../components/Card";

const SectionStyles = styled.section`
    h2 {
      font-size: 3rem;
    }
  
    .cardWrapper {
      --columns: 1;
      --row-gap: 3rem;
      --column-gap: 3rem;
      --max-width: 77rem;
      display: grid;
      grid-template-columns: repeat(var(--columns), 1fr);
      row-gap: var(--row-gap);
      column-gap: var(--column-gap);
      max-width: var(--max-width);
      margin: 2rem auto 0;
      transition: .2s max-width ease-in;
      
      @media (min-width: 768px) {
        --columns: 2;
        --row-gap: 3rem;
        --column-gap: 1rem;
      }
      
      @media (min-width: 992px) {
        --max-width: 100rem;
      }
      
      @media (min-width: 1200px) {
        --columns: 3;
        --max-width: 120rem;
        --column-gap: 2rem;
      }
    }
`;

const SpeakersTemplate = () => {
    const { speakers } = useStaticQuery(graphql`
        query {
            speakers: allSanitySpeaker {
                nodes {
                  name
                  order
                  description
                  facebookLink
                  linkedinLink
                  twitterLink
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
    console.log(speakers);
    return (
            <SectionStyles id='speakers'>
                <h2 className='center'>Meet the Speakers</h2>
                <div className='cardWrapper'>
                   {
                       speakers.nodes
                           .sort((a,b) => a.order - b.order)
                           .map(speaker => <Card {...speaker} />)
                   }
                </div>
            </SectionStyles>
        )

};

export default SpeakersTemplate;
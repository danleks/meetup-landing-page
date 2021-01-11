import React from 'react';
import styled, { keyframes } from 'styled-components';
import Img from 'gatsby-image';
import { graphql, useStaticQuery, Link } from 'gatsby';

const bounce = keyframes`
    0%, 40%, 70%, 90%, 100% {
        transform: translateY(0px);
    }

    30% {
        transform: translateY(-20px);
    }

    50% {
        transform: translateY(-10px);
    }
`;

const SectionStyles = styled.section`
    min-height: 60rem;
    max-height: 100%;
    background-color: var(--blue);
  
    @media (min-width: 992px) {
      padding-left: 10rem;
    }
`;

const HeroMainWrapper = styled.div`
    display: grid;
    --columns: 1;
    grid-template-columns: repeat(var(--columns), 1fr);
    gap: 2rem;

    @media (min-width: 991px) {
        --columns: 2;
    }
`;

const HeroInnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    @media (min-width: 992px) {
        text-align: left;
        align-items: flex-start;
    }

    > * {
        color: var(--white);
    }

    h1, h3 {
        font-weight: 200;
        margin-bottom: 1rem;
    }

    h1 {
        max-width: 35rem;
        font-size: 3.6rem;
        line-height: 1.1;
        margin-top: 3.5rem;
        @media (min-width: 570px) {
            max-width: 100%;
        }
    }

    h3 {
        margin-top: 1rem;
        font-size: 2.4rem;
    }

    h4 {
        font-size: 1.8rem;
        font-weight: 400;
        opacity: .6;
        letter-spacing: 1px;
        margin: 2rem 0;
    }

    a {
        margin-top: 7rem;
    }

    :last-child {
        display: none;

        @media (min-width: 768px) {
            display: block;
            justify-self: center;
        }
    } 
`;

const RocketImgStyles = styled(Img)`
    display: block;
    animation: 6s ease-in 3s infinite forwards ${bounce};
`;

const HeroTemplate = () => {
    const data = useStaticQuery(
        graphql`
          query {
            logo: file(relativePath: { eq: "meetup-logo.png" }) {
              childImageSharp {
                fixed(quality: 100, width: 180) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
            hero: file(relativePath: { eq: "rocket.png" }) {
              childImageSharp {
                fixed(quality: 100, width: 430) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        `);

    return (
        <SectionStyles id='home'>
            <HeroMainWrapper>
                <HeroInnerWrapper>
                    <Img fixed={data.logo.childImageSharp.fixed} />
                    <h1>Attend the most awaited Conference of 2015</h1>
                    <h3>to start you up with your business!</h3>
                    <h4>20<sup>th</sup> to 22<sup>nd</sup> October, 2015</h4>
                    <Link to='/' className='button'>Buy Tickets Now &rarr;</Link>
                </HeroInnerWrapper>
                <HeroInnerWrapper center>
                    <RocketImgStyles fixed={data.hero.childImageSharp.fixed} />
                </HeroInnerWrapper>
            </HeroMainWrapper>
        </SectionStyles>
    )
}

export default HeroTemplate;

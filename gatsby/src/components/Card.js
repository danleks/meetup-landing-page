import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import FacebookIcon from '../assets/icons/facebook.svg';
import TwitterIcon from '../assets/icons/twitter.svg';
import LinkedinIcon from '../assets/icons/linkedin.svg';

const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 3px solid var(--lightGrey);
  box-shadow: 0 0px 0px 0px transparent;
  transition: .2s ease-in;
  transition-property: transform, box-shadow;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 3px 3px 10px #ccc;
  }
  
  h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  
  p {
    margin: 0 0 1rem;
    letter-spacing: .8px;
    line-height: 1.4;
  }
  
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    
    li {
      width: 1.5rem;
    }
  }
  
`;

const ImgStyles = styled(Img)`
  display: inline-block;
  width: 40%;
  max-width: 20.8rem;
  border: 4px solid var(--grey);
  border-radius: 50%;
  margin: 0 auto;
  
`;

const Card = ({ image, name, description, facebookLink, twitterLink, linkedinLink }) => (
    <CardStyles>
        <ImgStyles fluid={image.asset.fluid} alt={name}/>
        <h3 className='center'>{ name }</h3>
        <p className='center'>{ description }</p>
        <ul>
            <li>
                <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                    <FacebookIcon />
                </a>
            </li>
            <li>
                <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                    <TwitterIcon />
                </a>
            </li>
            <li>
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon />
                </a>
            </li>
        </ul>
    </CardStyles>
);

export default Card;
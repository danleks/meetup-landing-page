import React from 'react';
import styled from 'styled-components';
import Microphone from '../assets/icons/microphone.svg';
import Ticket from '../assets/icons/ticket.svg';
import World from '../assets/icons/world.svg';

const SectionStyles = styled.section`
  h2 {
    font-size: 3rem;
    font-weight: 400;
  }
  
  ul {
    --direction: column;
    display: flex;
    flex-direction: var(--direction);
    gap: 3rem;
    max-width: 122rem;
    margin: 3rem auto 0;
    
    @media (min-width: 992px) {
      --direction: row
    }
  }
`;

const ListItemStyles = styled.li`
  padding: 2rem;
  list-style: none;
  text-align: center;
  
  svg {
    width: 8rem;
  }
  
  h3 {
    font-size: 2.4rem;
    font-weight: 200;
    margin: 2rem 0 1rem;
  }
  
  p {
    max-width: 66rem;
    margin: 0 auto 1rem;
    letter-spacing: .8px;
    line-height: 1.4;
  }
`;

const DescriptionTemplate = () => {
    const DESCRIPTION_DATA = [
        {
            icon: <Ticket />,
            title: 'Buy Early Bird Tickets',
            desc: 'Super cool discounts if you purchase early bird tickets now. Limited tickets available with some awesome perks and goodies!'
        },
        {
            icon: <Microphone />,
            title: 'Expert Speakers',
            desc: 'Best in class expert speakers who have extensive knowledge of the topic. All speakers are curated by the panel of experts.'
        },
        {
            icon: <World />,
            title: 'People around the globe!',
            desc: 'Meet the people attending this event around the globe. This will be the best opportunity to meet and greet people from your industry.!'
        },
    ]
    return (
        <SectionStyles id='description'>
            <h2 className='center'>Why This Event Is Super Cool?</h2>
            <ul>
                {
                    DESCRIPTION_DATA.map(item => (
                        <ListItemStyles>
                            <>{item.icon}</>
                            <h3>{ item.title }</h3>
                            <p>{ item.desc }</p>
                        </ListItemStyles>
                    ))
                }
            </ul>
        </SectionStyles>
    )
};

export default DescriptionTemplate;
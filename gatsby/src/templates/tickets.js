import React from 'react';
import styled from 'styled-components';

const SectionStyles = styled.section`
  background-color: var(--yellow);
  
  ul {
    --direction: column;
    --gap: 0;
    display: flex;
    flex-direction: var(--direction);
    justify-content: center;
    align-items: center;
    gap: var(--gap);
    list-style: none;
    
    @media (min-width: 768px) {
      --direction: row;
      --gap: 16rem;
    }
    
  }
  
  li {
    text-align: center;
  }
  
  h3 {
    margin: 2rem 0 1rem;
    font-size: 2.4rem;
    font-weight: 200;
  }
  
  strong {
    display: inline-block;
    margin: 0 0 1rem;
    font-size: 6.2rem;
    font-weight: 100;
    color: var(--red);
  }
  
  p {
    margin: 0 0 1rem;
  }
`;

const TicketsTemplate = () => {
    return (
        <SectionStyles id='tickets'>
            <h2 className='center'>Buy Tickets</h2>
            <ul>
                <li>
                    <h3>Early Bird Ticket</h3>
                    <strong>$399</strong>
                    <p>All days entry pass for all the events.</p>
                    <button>Buy (6 remaining)</button>
                </li>
                <li>
                    <h3>Workshop Pass</h3>
                    <strong>$199</strong>
                    <p>Entry pass for each workshop</p>
                    <button>Buy (42 remaining)</button>
                </li>
            </ul>
        </SectionStyles>
    )
};

export default TicketsTemplate;
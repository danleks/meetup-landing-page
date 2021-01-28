import React from 'react';
import styled from 'styled-components';
import { graphql, Link, navigate, useStaticQuery } from 'gatsby';

const FilterStyles = styled.ul`
  list-style: none;
  display: flex;
  border-bottom: 1px solid var(--grey);
  margin-top: 3rem;
  
  li {
    margin-bottom: -1px;
    border-bottom: 1px solid white;
  }
  
  li:last-child {
    padding-right: 0;
  }

  a {
    display: inline-block;
    padding: 1rem 2rem;
    border-bottom: 1px solid var(--grey);
    color: var(--blue);
    font-weight: 300;
  }

  .active {
    border: 1px solid var(--grey);
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    border-bottom: none;
    color: var(--black);
  }

  span {
    @media (max-width: 768px) {
      display: none;
    }
  }

`;

const SpeakersFilter = () => {
    // get a list of all the days
    const { confDays } = useStaticQuery(graphql`
      query {
        confDays: allSanityConfSchedule {
          nodes {
            confDay
            date
            id
            speakers {
              currentSpeaker {
                name
                id
              }
            }
            slug {
              current
            }
          }
        }
      }
    `);
    console.log(confDays.nodes);
    return  (
      <FilterStyles>
        {
         confDays.nodes
          .sort((a,b) => a.confDay.split(' ')[1] - b.confDay.split(' ')[1])
          .map(conferenceDay => {
            const d = new Date(conferenceDay.date);
            const date = d.getDate();
            const monthIndex = d.getMonth();
            const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
            return(
              <li>
                <Link
                  to={`/schedule/${conferenceDay.slug.current}`}
                  activeClassName='active'
                  state={{position: window.pageYOffset }}
                  isCurrent={true}
                  >
                    { `${conferenceDay.confDay}` }
                    <span>({`${date} ${months[monthIndex]}`})</span>
                </Link>
              </li>
            )
          })
        }
      </FilterStyles>         
    )
};

export default SpeakersFilter;
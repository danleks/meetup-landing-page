import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavTabsStyles = styled.ul`
  list-style: none;
  display: flex;
  border-bottom: 1px solid var(--grey);
  
  li {
    margin-bottom: -1px;
    border-bottom: 1px solid var(--white);
    padding-right: 2rem;
  }
  
  li:last-child {
    padding-right: 0;
  }
  .active {
    background-color: red;
  }
`;

const LinkStyles = styled(Link)`
  display: inline-block;
  padding: 1rem;
  border: 1px solid var(--grey);
  border-bottom-color: transparent;
`;

const NavTabs = () => {
    const [active, setActive] = useState(false);
    const TABS = [
        {
            name: 'Day 1',
            date: '20th, October',
            link: '/day-1'
        },
        {
            name: 'Day 2',
            date: '21st, October',
            link: '/day-2'
        },
        {
            name: 'Day 3',
            date: '22nd, October',
            link: '/day-3'
        },
    ];

    const handleActiveClass = () => {
        setActive(true);
        console.log('eye');
    }
    return  (
        <NavTabsStyles>
            {
                TABS.map(day => {
                    return (
                        <li key={day.name}>
                            <LinkStyles activeStyle={{ background: 'red' }} to={day.link} activeClassName={active}>
                                { day.name }
                                <small>({ day.date })</small>
                            </LinkStyles>
                        </li>
                    )
                })
            }
        </NavTabsStyles>
    )
};

export default NavTabs;
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
    position: fixed;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);

    ul {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        list-style: none;
    }
`;

const LinkStyles = styled(Link)`
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
    width: 13rem;
  
      &:hover > .title {
        opacity: 1;
      }

      &:hover > .dot {
        transform: scale(1.8);
      }

  .title {
    display: inline-block;
    padding: 3px 1rem;
    border-radius: 3px;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--white);
    background-color: var(--red);
    opacity: 0;
    transition: .2s opacity ease-in;
  }
  
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--red);
    transition: .2s transform ease-in;
  }
  
`;

const MENU_ITEMS = [
    {
        title: 'home',
        link: '/#home'
    },
    {
        title: 'speakers',
        link: '/#speakers'
    },
    {
        title: 'buy tickets',
        link: '/#tickets'
    },
    {
        title: 'schedule',
        link: '/#schedule'
    },
];

const Nav = () => {
    return (
        <NavStyles>
            <ul>
                {
                    MENU_ITEMS.map(item => {
                        return (
                            <li key={item.title}>
                                <LinkStyles 
                                    to={item.link} 
                                    title={item.title}
                                >
                                    <span className='title'>{ item.title }</span>
                                    <span className='dot'/>
                                </LinkStyles>
                            </li>
                        )
                    })
                }
            </ul>
        </NavStyles>
    )
}

export default Nav;

import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components';

const FooterStyles = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 20vh;
    background-color: var(--black);
    padding: 4rem 4rem 3rem;
    margin: 0;

    @media (min-width: 768px) {
        height: 10vh;
        flex-direction: row;
        align-items: center;
    }
 
    p {
        color: var(--white);
        text-align: center;
    }

    a {
        color: var(--blue);
    }
`;

const FooterListStyles = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    width: 100%;
    max-width: 26rem;
    margin: auto;
    
    a {
        font-size: 1.2rem;
        color: var(--yellow);
        transition: .3s color ease;

        :hover {
            color: var(--red);
        }
    }
`;

const Footer = () => {
    return (
        <FooterStyles>
            <p>
                &copy; 2015 <a href="#">DesignerDada.com</a> | All rights reserved.
            </p>
            <FooterListStyles>
                <li>
                    <Link to='/'>About Us</Link>
                </li>
                <li>
                    <Link to='/'>Privacy Policy</Link>
                </li>
                <li>
                    <Link to='/'>Terms & Conditions</Link>
                </li>
            </FooterListStyles>
        </FooterStyles>
    )
}

export default Footer;

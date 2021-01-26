import { useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import MailIcon from '../assets/icons/email.svg';

const SectionStyles = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 3rem;
    background-color: var(--black);

    h2 {
        margin-bottom: 3rem;
        color: var(--white);
        text-align: center;

        span {
            display: inline-block;
            width: 2.5rem;
            
        }
    }
`;

const FormStyles = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 3rem;
    max-width: 100rem;

    @media(min-width: 768px) {
        align-self: flex-end;
        margin: auto;
    }

    div {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        color: var(--white);

        @media(min-width: 768px) {
           gap: 5rem
        }
    }
    

    input, textarea {
        width: 100%;
        border-radius: 3px;
        border: 3px solid transparent;
        outline: none;
        padding: 1.5rem;
        transition: .1s border ease-in;

        @media(min-width: 768px) {
            flex: 3;
        }

        :focus {
            outline: none;
        }

        :valid {
            border: 3px solid var(--green);
            outline: none;
        }

        :invalid  {
            border: 3px solid var(--red);
            outline: none;
        }

       
        
    }

    label {
        margin-bottom: 5px;
        font-weight: 700;

        @media(min-width: 768px) {
            flex: 1;
            text-align: right;
        }
    }
`;

const ContactTemplate = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <SectionStyles>
            <h2><span><MailIcon /></span> Contact Form</h2>
            <FormStyles>
                <div>
                    <label for='name'>Name<sup>*</sup></label>
                    <input required name='name' value={name} onChange={(e) => setName(e.target.value)} id='name' placeholder='John Doe' />
                </div>
                <div>
                    <label for='email'>Email<sup>*</sup></label>
                    <input required name='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} id='email' placeholder='you@youremail.com' />
                </div>
                <div>
                    <label for='message'>Your message<sup>*</sup></label>
                    <textarea required name='message' value={message} onChange={(e) => setMessage(e.target.value)} id='message' rows='5' />
                </div>
                <button className='submit'>Send &rarr;</button>
            </FormStyles>
        </SectionStyles>
    )
}

export default ContactTemplate;

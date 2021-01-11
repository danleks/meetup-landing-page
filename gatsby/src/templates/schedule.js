import React from 'react';
import styled from 'styled-components';
import NavTabs from "../components/NavTabs";

const SectionStyles = styled.section`
  
`;

const ScheduleTemplate = () => {
    return (
        <SectionStyles>
            <h2 className='center'>Event Schedule</h2>
            <NavTabs />
        </SectionStyles>
    )
};

export default ScheduleTemplate;
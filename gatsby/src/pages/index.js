import React from 'react';
import HeroTemplate from '../templates/hero';
import DescriptionTemplate from "../templates/description";
import SpeakersTemplate from "../templates/speakers";
import TicketsTemplate from "../templates/tickets";
import ScheduleTemplate from "../templates/schedule";

const index = () => {
  return (
    <>
        <HeroTemplate />
        <DescriptionTemplate />
        <SpeakersTemplate />
        <TicketsTemplate />
        <ScheduleTemplate />
    </>
  )
}

export default index;

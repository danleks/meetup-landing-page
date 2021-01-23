import React from 'react';

// 1. Import the TimeInput react custom component
import TimeInput from '../components/TimeInput';

// 2. List of conference days and topics
const days = ['day-1', 'day-2', 'day-3'];
const topics = ['Paper Prototyping Applications', 'hands-on Web Audio', 'Conversion Rate Optimization Techniques in Ecommerce', 'Making Dog Food Part of a Balanced Diet', 'Web Fonts Performance', 'an Introduction to Touch and Pointer Events', 'Modular Design at Work', 'the Designer’s Guide to Being Essential'];

// 3. Validate function which is invoked on user input
const verifyInput  = scheduleDetails => {
    const { currentSpeaker, speakerTopic, startSpeech, endSpeech,} = scheduleDetails;

    if (!speakerTopic) {
        return 'Please select a topic'
    }
    if (!startSpeech) {
        return 'Choose when the speaker begins the speech'
    }
    if (!endSpeech) {
        return 'Choose when the speaker ends the speech'
    }
    if (!currentSpeaker) {
        return 'Choose the speaker'
    }

    return startSpeech < endSpeech ? true : `Incorrect time interval, the speaker should start the speech earlier before he ends the speech`
};

export default {
    name: 'scheduleDetails',
    title: 'Schedule details',
    type: 'object',

    // 4. Perform validation
    validation: Rule => Rule.custom(verifyInput),

    fields: [
        {
            name: 'currentSpeaker',
            title: 'Speaker',
            description: 'Select a speaker',
            type: 'reference',
            to: [{ type: 'speaker' }]
        },
        {
            // 5. Enable editors to input a string from a predefined list of topics
            name: 'speakerTopic',
            title: 'Speaker topic',
            description: 'Select the topic',
            type: 'reference',
            to: [{ type: 'topic' }],
        },
        {
            // 6. Enable editors to input a point in time using a custom input component
            name: 'startSpeech',
            title: 'Start speech',
            type: 'string',
            description: 'Choose when the speeker starts the speech',
            inputComponent: TimeInput
        },
        {
            // 7.  Same time input as above, but assigned to a different field
            name: 'endSpeech',
            title: 'End speech',
            type: 'string',
            description: 'Choose when the speeker ends the speech',
            inputComponent: TimeInput
        },
    ],
    // 8. Define how scheduleDetails object will render in the Studio
    preview: {
        select: {
            currentSpeaker: 'currentSpeaker.name',
            imageUrl: 'currentSpeaker.image.asset.url',
            speakerTopic: 'speakerTopic.topic',
            startSpeech: 'startSpeech',
            endSpeech: 'endSpeech',
        },
        prepare({ currentSpeaker, imageUrl, speakerTopic, startSpeech, endSpeech, }) {
            return {
                title: `${currentSpeaker} - ${speakerTopic}`,
                subtitle: `${startSpeech} - ${endSpeech}`,
                media: <img src={imageUrl} alt={`${currentSpeaker}`} />
            }
        }
    }
}
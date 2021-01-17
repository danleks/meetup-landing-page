// 1. Import the TimeInput react custom component
import TimeInput from '../components/TimeInput';

// 2. List of conference days and topics
const days = ['Day 1', 'Day 2', 'Day 3'];
const topics = ['PAPER PROTOTYPING APPLICATIONS', 'HANDS-ON WEB AUDIO', 'CONVERSION RATE OPTIMIZATION TECHNIQUES IN ECOMMERCE', 'MAKING DOG FOOD PART OF A BALANCED DIET', 'WEB FONTS PERFORMANCE', 'AN INTRODUCTION TO TOUCH AND POINTER EVENTS', 'MODULAR DESIGN AT WORK', 'THE DESIGNER’S GUIDE TO BEING ESSENTIAL'];

// 3. Validate function which is invoked on user input
const verifyInput  = scheduleDetails => {
    const { speakerTopic, startSpeech, endSpeech, confDay} = scheduleDetails;

    if (!speakerTopic) {
        return 'Please select a topic'
    }
    if (!startSpeech) {
        return 'Choose when the speaker begins the speech'
    }
    if (!endSpeech) {
        return 'Choose when the speaker ends the speech'
    }
    if (!confDay) {
        return 'Choose the days when the speakers gives the speech'
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
            // 5. Enable editors to input a string from a predefined list of topics
            name: 'speakerTopic',
            title: 'Speaker topic',
            description: 'Select the topic',
            type: 'string',
            options: {
                list: topics,
                //layout: 'radio' // <-- defaults to 'dropdown'
              }
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
        {
            // 8. Enable editors to choose a day for the speech
            name: 'confDay',
            title: 'Conference day',
            type: 'string',
            description: 'Select conference day',
            options: {
                list: days,
                layout: 'radio'
            }
        }
    ],
    // 8. Define how scheduleDetails object will render in the Studio
    preview: {
        select: {
            speakerTopic: 'speakerTopic',
            startSpeech: 'startSpeech',
            endSpeech: 'endSpeech',
            confDay: 'confDay',
        },
        prepare({ speakerTopic, startSpeech, endSpeech, confDay }) {
            console.log(speakerTopic)
            return {
                title: speakerTopic,
                subtitle: `${startSpeech} - ${endSpeech}, ${confDay}`
            }
        }
    }
}
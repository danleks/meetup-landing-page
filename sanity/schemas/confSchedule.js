const days = ['Day 01', 'Day 02', 'Day 03'];

export default {
    // Computer name
    name: 'confSchedule',
    // visible title
    title: 'Conference schedule',
    type: 'document',
    fields: [
        {
            name: 'confDay',
            title: 'Conference day',
            type: 'string',
            description: 'Select conference day',
            options: {
                list: days,
            }
        },
        {
            name: 'date',
            title: 'Set the date',
            type: 'date',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'confDay',
                slugify: input => input
                                    .toLowerCase()
                                    .replace(/\s+/g, '-')
            }
        },
        {
            title: 'Speakers',
            description: 'Add speakers to the current conference day - 4 speakers max.',
            name: 'speakers',
            type: 'array',
            of: [{ type: 'scheduleDetails' }]
        },
    ],
    preview: {
        select: {
            confDay: 'confDay',
            date: 'date',
            speaker0: 'speakers.0.currentSpeaker.name',
            speaker1: 'speakers.1.currentSpeaker.name',
            speaker2: 'speakers.2.currentSpeaker.name',
            speaker3: 'speakers.3.currentSpeaker.name',

        },
        prepare({ confDay, date, ...speakers }) {
            // Filter undefined speakers out
            console.log(speakers);
            const speakersFiltered = Object.values(speakers).filter(Boolean);
            return {
                title: `${confDay} - ${date}`,
                subtitle: speakersFiltered.length > 0 ? speakersFiltered.join(', ') : 'No speakers set',
            }
        }
    }
}
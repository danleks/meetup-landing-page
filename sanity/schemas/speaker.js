export default {
    // Computer name
    name: 'speaker',
    // visible title
    title: 'Speakers',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            title: 'Schedule',
            name: 'schedule',
            type: 'array',
            of: [{ type: 'scheduleDetails' }]
        },
        // {
        //     name: 'topics',
        //     title: 'Speaker topic / add multiple if needed',
        //     type: 'array',
        //     of: [
        //         {
        //             type: 'reference',
        //             to: [{ type: 'topic' }],
        //         }
        //     ]
        // },
        // {
        //     title: 'Conference days',
        //     name: 'confDays',
        //     type: 'array',
        //     of: [{type: 'string'}],
        //     options: {
        //         list: [
        //             {title: 'Day 1', value: 'day1'},
        //             {title: 'Day 2', value: 'day2'},
        //             {title: 'Day 3', value: 'day3'},
        //         ]
        //     }
        // },
        {
            type: "string",
            name: 'facebook',
            title: 'Facebook'
        },
        {
            type: "string",
            name: 'twitter',
            title: 'Twitter'
        },
        {
            type: "string",
            name: 'linkedin',
            title: 'Linkedin'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        }
    ]
}
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
        // {
        //     title: 'Schedule',
        //     name: 'schedule',
        //     type: 'array',
        //     of: [{ type: 'scheduleDetails' }]
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
import path from 'path';

async function turnConferenceDaysIntoPages({ graphql,  actions}) {
    // 1. Get the template
    const conferenceDayTemplate = path.resolve('./src/pages/index.js');
    // 2. query all the conference days
    const { data } = await graphql(`
        query {
            confDays: allSanityConfSchedule {
                nodes {
                  confDay
                  id
                  slug {
                      current
                  }
                }
            }
        }
    `);
    // 3. createPage for each conference day
    data.confDays.nodes.forEach((conferenceDay) => {
        console.log(`Creating page for day`, conferenceDay.confDay);
        actions.createPage({
            path: `/schedule/${conferenceDay.slug.current}`,
            component: conferenceDayTemplate,
            context: {
                day: conferenceDay.confDay,
                scheduleRegex: `/${conferenceDay.confDay}/i`,
            }
        })
    });
    

   

}

export async function createPages(params) {
    // Create pages dynamically
    // 1. Conference days
    await turnConferenceDaysIntoPages(params);
}
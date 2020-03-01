export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e5b4d1aee027c760eb6b94c',
                  title: 'Sanity Studio',
                  name: 'lcanavesio-studio',
                  apiId: 'e6006f47-7078-411b-86c0-9e25f58ba17c'
                },
                {
                  buildHookId: '5e5b4d1953bf6429b8a3bc0a',
                  title: 'Landing pages Website',
                  name: 'lcanavesio',
                  apiId: '969f272b-5a08-4fe0-9400-caf436a7d826'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/luxer066/lcanavesio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://lcanavesio.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

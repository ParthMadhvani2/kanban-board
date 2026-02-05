
export const INITIAL_KANBAN_DATA: KanbanListType[] = [
  {
    listName: 'Not Started',
    listItems: [
      {
        teamName: 'DESIGN',
        taskTitle: 'Inbox Design',
        ticketID: 1,
        tags: ['design', 'blocker'],
        assignees: [
          {
            username: 'parthmadhvani',
            avatar: 'https://github.com/ParthMadhvani2.png',
          },
        ],
      },
      {
        teamName: 'DESIGN',
        taskTitle: 'Inbox Infrastructure',
        ticketID: 2,
        tags: ['backend'],
        assignees: [
          {
            username: 'parthmadhvani',
            avatar: 'https://github.com/ParthMadhvani2.png',
          },
          {
            username: 'parthmadhvani',
            avatar: 'https://github.com/ParthMadhvani2.png',
          },
        ],
      },
      {
        teamName: 'FRONTEND',
        ticketID: 8,
        taskTitle: 'Build Conversation Module',
        tags: ['frontend', 'data'],
        assignees: [],
      },
    ],
  },
  {
    listName: 'In Progress',
    listItems: [
      {
        teamName: 'BACKEND',
        taskTitle: "Setup co-pilot API's",
        ticketID: 3,
        tags: ['backend', 'API'],
        assignees: [
          {
            username: 'parthmadhvani',
            avatar: 'https://github.com/ParthMadhvani2.png',
          },
        ],
      },
      {
        teamName: 'FRONTEND',
        taskTitle: 'Setup redux structure',
        ticketID: 10,
        assignees: [
          {
            username: 'parthmadhvani',
            avatar: 'https://github.com/ParthMadhvani2.png',
          },
        ],
      },
      {
        teamName: 'BACKEND',
        taskTitle: 'Build co-pilot UI',
        ticketID: 4,
        tags: ['frontend', 'ui'],
        assignees: [
          {
            username: 'parthmadhvani',
            avatar: 'https://github.com/ParthMadhvani2.png',
          },
        ],
      },
      {
        teamName: 'DESIGN',
        taskTitle: 'Notification Module',
        ticketID: 5,
        assignees: [
          {
            username: 'parthmadhvani',
            avatar: 'https://github.com/ParthMadhvani2.png',
          },
          {
            username: 'parthmadhvani',
            avatar: 'https://github.com/ParthMadhvani2.png',
          },
        ],
      },
      {
        teamName: 'FRONTEND',
        taskTitle: 'Editor Design',
        ticketID: 11,
        tags: ['design', 'frontend'],
        assignees: [
          {
            username: 'parthmadhvani',
            avatar: 'https://github.com/ParthMadhvani2.png',
          },
        ],
      },
    ],
  },
  {
    listName: 'Under Review',
    listItems: [
      {
        teamName: 'DESIGN',
        taskTitle: 'Project table API tests',
        ticketID: 6,
        tags: ['api', 'backend', 'testing'],
        assignees: [
          {
            username: 'parthmadhvani',
            avatar: 'https://github.com/ParthMadhvani2.png',
          },
        ],
      },
      {
        teamName: 'DESIGN',
        taskTitle: 'Project table fixes',
        ticketID: 9,
        assignees: [
          {
            username: 'parthmadhvani',
            avatar: 'https://github.com/ParthMadhvani2.png',
          },
          {
            username: 'parthmadhvani',
            avatar: 'https://github.com/ParthMadhvani2.png',
          },
          {
            username: 'parthmadhvani',
            avatar: 'https://github.com/ParthMadhvani2.png',
          },
        ],
      },
    ],
  },
  {
    listName: 'Shipped',
    listItems: [
      {
        teamName: 'DEVOPS',
        taskTitle: 'Public view links',
        ticketID: 7,
        tags: ['frontend', 'backend'],
        assignees: [
          {
            username: 'parthmadhvani',
            avatar: 'https://github.com/ParthMadhvani2.png',
          },
        ],
      },
      {
        teamName: 'BACKEND',
        taskTitle: 'Command center UI testing',
        ticketID: 3,
        tags: ['ui', 'frontend', 'testing'],
        assignees: [
          {
            username: 'parthmadhvani',
            avatar: 'https://github.com/ParthMadhvani2.png',
          },
        ],
      },
      {
        teamName: 'DESIGN',
        taskTitle: 'Notifictions Phase',
        ticketID: 4,
        assignees: [
          {
            username: 'parthmadhvani',
            avatar: 'https://github.com/ParthMadhvani2.png',
          },
        ],
      },
    ],
  },
];

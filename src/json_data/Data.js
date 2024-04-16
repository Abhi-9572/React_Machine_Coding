export const jsonData = [
  {
    name: "Parent 1",
    children: [
      {
        name: "Child 1.1",
        children: [
          {
            name: "Grandchild 1.1.1",
            children: [
              {
                name: "Great Grandchild 1.1.1.1",
                children: [],
              },
            ],
          },
          {
            name: "Grandchild 1.1.2",
            children: [],
          },
        ],
      },
      {
        name: "Child 1.2",
        children: [],
      },
    ],
  },
  {
    name: "Parent 2",
    children: [
      {
        name: "Child 2.1",
        children: [],
      },
      {
        name: "Child 2.2",
        children: [
          {
            name: "Grandchild 2.2.1",
            children: [],
          },
        ],
      },
    ],
  },
];

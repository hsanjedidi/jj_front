// Extract history data into an array
export const itemsNavbar = [
  // {
  //   id: 1,
  //   title: "Home",
  //   link: "/",
  // },
  {
    id: 3,
    title: "About",
    link: "/about-us",
  },
  {
    id: 2,
    title: "Menu",
    link: "/menu2",
  },
  {
    id: 4,
    title: "Events",
    link: "/events",
    children: [
      {
        id: 9,
        title: "One Event",
        link: "/events/one",
      },
      {
        id: 31,
        title: "About Us",
        link: "/about-us",
      },
      {
        id: 32,
        title: "Chefs",
        link: "/chefs",
      },
      {
        id: 33,
        title: "History",
        link: "/history",
      },
      {
        id: 34,
        title: "Services",
        link: "/services",
      },
    ],
  },
  {
    id: 4,
    title: "Gallery",
    link: "/gallery",
  },
  {
    id: 7,
    title: "History2",
    link: "/history2",
  },

  {
    id: 8,
    title: "Contact",
    link: "/contact-us",
    children: [
      {
        id: 71,
        title: "Error 404",
        link: "/404",
      },
      {
        id: 72,
        title: "Confirmation",
        link: "/confirmation",
      },
      {
        id: 73,
        title: "Coming Soon",
        link: "/coming-soon",
      },
    ],
  },
];

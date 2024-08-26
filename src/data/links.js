import {
  DashboardIcon,
  PersonIcon,
  RocketIcon,
  LightningBoltIcon,
  CardStackIcon,
  GlobeIcon,
  ArchiveIcon,
} from "@radix-ui/react-icons";

export const links = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "User Management",
    icon: <PersonIcon />,
    links: [
      {
        name: "All Users",
      },
      {
        name: "User Charts",
      },
      {
        name: "Demographics",
      },
    ],
  },
  {
    title: "Destination Management",
    icon: <RocketIcon />,
    links: [
      {
        name: "Content Update",
      },
      {
        name: "Travel Trends",
      },
    ],
  },
  {
    title: "Operations",
    icon: <LightningBoltIcon />,
    links: [
      {
        name: "Trips Management",
      },
    ],
  },
  {
    title: "Content & Ads",
    icon: <CardStackIcon />,
    links: [
      {
        name: "Ad Management",
      },
      {
        name: "Ad Performance",
      },
      {
        name: "Ad MSheduling",
      },
      {
        name: "Content Performance",
      },
      {
        name: "Content Management",
      },
    ],
  },
  {
    title: "Trips",
    icon: <GlobeIcon />,
    links: [
      {
        name: "Trip Plans",
      },
    ],
  },
  {
    title: "Customer Support",
    icon: <ArchiveIcon />,
    links: [
      {
        name: "Support Tickets",
      },
      {
        name: "Frequent Issues Analysis",
      },
    ],
  },
];

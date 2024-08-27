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
  // {
  //   title: "Dashboard",
  //   icon: <DashboardIcon color="#0077B6" />,
  // },
  {
    title: "User Management",
    icon: <PersonIcon color="#0077B6" />,
    links: [
      {
        name: "All Users",
        href: "/user-management/all-users",
      },
      {
        name: "User Charts",
        href: "/user-management/user-charts",
      },
      {
        name: "Demographics",
        href: "/user-management/demographics",
      },
    ],
  },
  {
    title: "Destination MGT",
    icon: <RocketIcon color="#0077B6" />,
    links: [
      {
        name: "Content Update",
        href: "/destination-management/content-update",
      },
      {
        name: "Travel Trends",
        href: "/destination-management/travel-trends",
      },
    ],
  },
  {
    title: "Operations",
    icon: <LightningBoltIcon color="#0077B6" />,
    links: [
      {
        name: "Employee Management",
        href: "/operations/employee-management",
      },
      {
        name: "Trips Management",
        href: "/operations/trips-management",
      },
    ],
  },
  {
    title: "Content & Ads",
    icon: <CardStackIcon color="#0077B6" />,
    links: [
      {
        name: "Ad Management",
        href: "/content-ads/ad-management",
      },
      {
        name: "Ad Performance",
        href: "/content-ads/ad-performance",
      },
      {
        name: "Ad Scheduling",
        href: "/content-ads/ad-scheduling",
      },
      {
        name: "Content Performance",
        href: "/content-ads/content-performance",
      },
      {
        name: "Content Management",
        href: "/content-ads/content-management",
      },
    ],
  },
  {
    title: "Trips",
    icon: <GlobeIcon color="#0077B6" />,
    links: [
      {
        name: "Trip Plans",
        href: "/trips/trip-plans",
      },
    ],
  },
  {
    title: "Customer Support",
    icon: <ArchiveIcon color="#0077B6" />,
    links: [
      {
        name: "Support Tickets",
        href: "/customer-support/support-tickets",
      },
      {
        name: "Frequent Issues Analysis",
        href: "/customer-support/frequent-issues-analysis",
      },
    ],
  },
];

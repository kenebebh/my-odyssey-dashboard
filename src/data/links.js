import {
  DashboardIcon,
  PersonIcon,
  RocketIcon,
  LightningBoltIcon,
  CardStackIcon,
  GlobeIcon,
  ArchiveIcon,
} from "@radix-ui/react-icons";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

export const items = [
  {
    title: "User Management",
    url: "#",
    icon: <PersonIcon color="#0077B6" />,
    items: [
      {
        name: "All Users",
        url: "/user-management/all-users",
      },
      {
        name: "User Charts",
        url: "/user-management/user-charts",
      },
      {
        name: "Demographics",
        url: "/user-management/demographics",
      },
    ],
  },
  {
    title: "Destination MGT",
    url: "#",
    icon: <RocketIcon color="#0077B6" />,
    items: [
      {
        name: "Content Update",
        url: "/destination-management/content-update",
      },
      {
        name: "Travel Trends",
        url: "/destination-management/travel-trends",
      },
    ],
  },
  {
    title: "Operations",
    url: "#",
    icon: <LightningBoltIcon color="#0077B6" />,
    items: [
      {
        name: "Employee Management",
        url: "/operations/employee-management",
      },
      {
        name: "Trips Management",
        url: "/operations/trips-management",
      },
    ],
  },
  {
    title: "Content & Ads",
    icon: <CardStackIcon color="#0077B6" />,
    items: [
      {
        name: "Ad Management",
        url: "/content-ads/ad-management",
      },
      {
        name: "Ad Performance",
        url: "/content-ads/ad-performance",
      },
      {
        name: "Ad Scheduling",
        url: "/content-ads/ad-scheduling",
      },
      {
        name: "Content Performance",
        url: "/content-ads/content-performance",
      },
      {
        name: "Content Management",
        url: "/content-ads/content-management",
      },
    ],
  },
  {
    title: "Trips",
    icon: <GlobeIcon color="#0077B6" />,
    items: [
      {
        name: "Trip Plans",
        url: "/trips/trip-plans",
      },
    ],
  },
  {
    title: "Customer Support",
    icon: <ArchiveIcon color="#0077B6" />,
    items: [
      {
        name: "Support Tickets",
        url: "/customer-support/support-tickets",
      },
      {
        name: "Frequent Issues Analysis",
        url: "/customer-support/frequent-issues-analysis",
      },
    ],
  },
];

// Menu items.
export const items2 = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

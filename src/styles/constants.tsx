
import { SideNavItem } from "./types";
import { Home, Globe2, Satellite, Clock7 } from "lucide-react";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Back to Home",
    path: "/",
    icon: <Home width="19" height="19" />,
  },
  /*
    {
        title: "Restore",
        path: "/explorer/visualizer",
        icon: <Icon icon="lucide:folder" width="24" height="24"/>,
    },
    */
  {
    title: "Visualizer",
    path: "/explorer",
    icon: <Globe2 width="19" height="19" />,
  },
  {
    title: "Image Processing",
    path: "/explorer/image-processing",
    icon: <Satellite width="19" height="19" />,
    subMenu: true,
    subMenuItems: [
      {
        title: "Color Combinations",
        path: "/explorer/image-processing/color-combinations",
      },
      { title: "Minerals", path: "/explorer/image-processing/minerals" },
      { title: "Structures", path: "/explorer/image-processing/structures" },
      { title: "Deposits", path: "/explorer/image-processing/deposits" },
      {
        title: "Environmental",
        path: "/explorer/image-processing/environmental",
      },
      {
        title: "Build your Own",
        path: "/explorer/image-processing/build-your-own",
      },
    ],
  },
  {
    title: "Temporal Analysis",
    path: "/explorer/temporal-analysis",
    icon: <Clock7 width="19" height="19" />,
  },
];

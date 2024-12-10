import { Roles } from "../constant";
import PathConstants from "./pathConstants";

export interface IMenuItems {
  name: string;
  route: string;
  icon: string;
  roles: Roles[];
}

export const menuItems: IMenuItems[] = [
  {
    name: "Home",
    route: PathConstants.HOME,
    icon: "s1home",
    roles: [],
  },
  {
    name: "About Us",
    route: PathConstants.ABOUT,
    icon: "",
    roles: [Roles.ADMIN, Roles.USER],
  },
  {
    name: "Contact",
    route: PathConstants.CONTACT,
    icon: "",
    roles: [Roles.ADMIN],
  },
  {
    name: "Manage Holidays",
    route: PathConstants.MANAGE_HOLIDAYS,
    icon: "",
    roles: [],
  },
];

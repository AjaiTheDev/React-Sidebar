export interface IMenuItems {
  name: string;
  route: string;
  icon: string;
}

export const menuItems: IMenuItems[] = [
  {
    name: "Home",
    route: "/",
    icon: 's1home',
  },
  {
    name: "T-Shirts",
    route: "/t-shirts",
    icon: 'fatshirt',
  },
    {
    name: "Hats",
    route: "/hats",
    icon: '',
  },
  {
    name: "About Us",
    route: "/about",
    icon: '',
  },
    {
    name: "Contact",
    route: "/contact",
    icon: '',
  },
];

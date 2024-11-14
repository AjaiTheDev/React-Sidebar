import { Link, useLocation } from "react-router-dom";

export interface MenuItemProps {
  icon: string;
  name: string;
  route: string;
}

// Clickable menu items
export const MenuItem = ({ name, route }: MenuItemProps) => {
  const { pathname } = useLocation();
  // Highlight menu item based on currently displayed route
  const colorClass =
    pathname === route ? "text-white" : "text-white/50 hover:text-white";

  return (
    <Link
      to={route}
      className={`flex gap-1 justify-center lg:justify-start [&>*]:my-auto text-lg pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
    >
      <div>{name}</div>
    </Link>
  );
};

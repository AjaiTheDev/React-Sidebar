import { useEffect, useState } from "react";
import Navbar from "./Navbar/navBar";
import { SideBar } from "./Sidebar-components/sidebar";

/**
 * Props for the Header component.
 *
 * @interface HeaderProps
 * @property {boolean} isMediumDevice - Indicates if the device is medium-sized
 */
export interface HeaderProps {
  isMediumDevice: boolean;
}

/**
 * The Header component displays a navigation bar and a sidebar.
 * It adjusts the visibility of the sidebar based on the device size.
 *
 * @param {HeaderProps} props - The props for the component.
 * @param {boolean} isMediumDevice - Indicates if the device is medium-sized.
 *
 * @returns {JSX.Element} The rendered Header component.
 *
 * @example
 * <Header isMediumDevice={true} />
 */
export const Header: React.FC<HeaderProps> = ({ isMediumDevice }) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const handleSideBarToggle = (): void => {
    setShowSidebar((prev: boolean) => !prev);
  };

  useEffect(() => {    
    setShowSidebar(!isMediumDevice);
  }, [isMediumDevice]);

  return (
    <>
      <nav className="lg:hidden">
        <Navbar setter={handleSideBarToggle} />
      </nav>
      <aside>
        <SideBar
          setter={handleSideBarToggle}
          showSidebar={showSidebar}
          isMediumDevice={isMediumDevice}
        />
      </aside>
    </>
  );
};

export default Header;

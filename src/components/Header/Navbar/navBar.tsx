import React from "react";

export interface NavbarProps {
  setter: () => void;
}

/**
 * The Navbar component displays a company logo and a button(close) to toggle the sidebar.
 *
 * @param {NavbarProps} props - The props for the component.
 * @param {Function} props.setter - A function to handle sidebar toggle.
 *
 * @returns {JSX.Element} The rendered Navbar component.
 *
 * @example
 * <Navbar setter={handleSidebarToggle} />
 */
export const Navbar: React.FC<NavbarProps> = ({ setter }) => {
  return (
    <div className="flex w-screen h-20 bg-[#0B192C]">
      <div className="p-2 w-full flex items-center justify-between">
        <a href="/">
          <img
            src={"src/assets/free-logo.jpg"}
            alt="Company Logo"
            width={70}
            className="rounded-full"
          />
        </a>
        <button className="h-12 px-3 bg-white rounded-md" onClick={setter}>
          <img src={"src/assets/menu.png"} alt="hamburger-icon" width={30} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

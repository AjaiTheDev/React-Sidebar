import { useCallback } from "react";
import { useNavigate } from "react-router";
import { FiX, FiLogOut } from "react-icons/fi";
import { Tooltip } from "react-tooltip";

import { menuItems, IMenuItems } from "../../../routes/menu-items";
import { useAppContext } from "../../../context/app-context";
import { MenuItem } from "./menu-item";
import { clearToken } from "../../../utils/local-storage-service";
import PathConstants from "../../../routes/pathConstants";

export interface SideBarProps {
  showSidebar: boolean;
  isMediumDevice: boolean;
  setter: () => void;
}

export const SideBar: React.FC<SideBarProps> = ({
  showSidebar,
  setter,
  isMediumDevice,
}) => {
  const { hasValidToken } = useAppContext();
  const navigate = useNavigate();
  const wrapperDivClassName =
    "bg-primary h-full w-full md:w-[500px] lg:w-[350px] transform transition-transform ease-in-out duration-500 fixed lg:static top-0 bottom-0 left-0 z-40";

  const appendWrapperDivClassName = showSidebar
    ? "translate-x-0"
    : "-translate-x-full";

  const ModalOverLay = () => {
    return (
      <div
        className={`flex lg:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
        onClick={setter}
      />
    );
  };

  const renderLogoutButton = useCallback(() => {
    return (
      <button
        id="logout-btn"
        className="text-[#FFF] text-[2.3rem]"
        aria-label="logout button"
        onClick={handleLogout}
      >
        <FiLogOut />
      </button>
    );
  }, []);

  const handleLogout = (): void => {
    clearToken();
    navigate(PathConstants.LOGIN);
  };

  return (
    <>
      <div className={`${wrapperDivClassName} ${appendWrapperDivClassName}`}>
        <div className="p-2 flex justify-between items-center">
          <a href="/">
            <img
              src={"src/assets/free-logo.jpg"}
              alt="Company Logo"
              width={70}
              height={70}
              className="rounded-full"
            />
          </a>
          <div className="flex flex-row justify-evenly items-center">
            {hasValidToken && renderLogoutButton()}
            <Tooltip
              anchorSelect="#logout-btn"
              className="text-white"
              place="bottom"
            >
              Logout
            </Tooltip>
            {isMediumDevice && (
              <button
                id="close-btn"
                aria-label="sidebar close button"
                className="text-[#FFF] text-[2.3rem]"
                onClick={setter}
              >
                <FiX />
              </button>
            )}
            <Tooltip
              anchorSelect="#close-btn"
              className="text-white"
              place="bottom"
            >
              close
            </Tooltip>
          </div>
        </div>
        <div className="flex flex-col">
          {menuItems?.length > 0 &&
            menuItems?.map((item: IMenuItems, index: number) => (
              <MenuItem key={item?.name ?? index} {...item} />
            ))}
        </div>
      </div>
      {showSidebar && <ModalOverLay />}
    </>
  );
};

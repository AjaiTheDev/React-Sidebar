import { FiX } from "react-icons/fi";
import { MenuItem } from "./menu-item";
import { menuItems, IMenuItems } from "../menu-items";

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
          {isMediumDevice && (
            <button className="text-[#FFF] text-[2.3rem]" onClick={setter}>
              <FiX />
            </button>
          )}
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

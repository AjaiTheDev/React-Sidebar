import { useEffect, useRef } from "react";
import { useState } from "react";

import { FiSearch, FiX } from "react-icons/fi";
import Modal from "react-modal";
import useWindowWidth from "../utils/custom-hooks/use-window-width";

export interface searchInputProps {
  inputRef: React.RefObject<HTMLInputElement>;
  openModal: () => void;
  handleInputFocus?: () => void;
}

const modalStyleLg = {
  content: {
    top: "10%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "40%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const modalStyleMd = {
  content: {
    width: "100%",
    left: "auto",
    right: "auto",
  },
};

function SearchInput({ inputRef, openModal }: searchInputProps) {
  return (
    <div className="flex flex-row justify-between items-center px-2 border-2 border-gray-400 rounded-lg search-input-div">
      <input
        ref={inputRef}
        tabIndex={0}
        id="search-input"
        className="h-10 search-input"
        placeholder="search"
        onClick={openModal}
      />
      <FiSearch />
    </div>
  );
}

export const SearchInputModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const { isMediumDevice } = useWindowWidth();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const afterOpenModal = () => {
    searchInputRef.current?.focus();
  };

  const closeModal = () => {
    console.log("close");
    setModalIsOpen(false);
  };

  const keyDownHandler = (event: KeyboardEvent) => {
    if (
      event.ctrlKey &&
      event.key === "/" &&
      document.activeElement !== searchInputRef.current
    ) {
      event.preventDefault();
      setModalIsOpen(true);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <div className="flex flex-row justify-between">
      <button
        className="w-full  md:w-60 rounded-lg flex flex-row justify-between items-center p-2 border border-gray-700"
        onClick={openModal}
      >
        <div className="flex flex-row justify-between items-center">
          <FiSearch />
          <span className="ml-2 text-gray-400">search</span>
        </div>
        <span className="text-gray-400">ctrl + /</span>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        style={isMediumDevice ? modalStyleMd : modalStyleLg}
        overlayClassName='overlay-modal'
      >
        <button className="text-[#000] text-[2.3rem]" onClick={closeModal}>
          <FiX />
        </button>
        <SearchInput key={1} inputRef={searchInputRef} openModal={openModal} />
      </Modal>
    </div>
  );
};

import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/reducers/ui";
import { EyeIcon } from "../../assets/icons";

export default function Modal({ isVisible, onClose, children }) {
  const dispatch = useDispatch();
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "modal-wrapper") {
      onClose();
    }
  };

  return (
    // <div
    //   id="modal-wrapper"
    //   className="bg-tertiary flex tablet:place-center absolute absolute-center w-full h-full tablet:h-auto tablet:max-w-[520px] mx-auto z-10 rounded-md tablet:shadow-md shadow-gray-50 flex-col gap-y-8 "
    //   //   onClick={(e) => handleClose(e)}
    //   onClick={(e) => {
    //     e.stopPropagation();
    //     dispatch(closeModal);
    //   }}
    // >
    //   <button className="" onClick={() => onclose()}>
    //     CLOSE
    //   </button>
    //   <h1 className="">MODAL</h1>
    //   <div
    //     className=""
    //     onClick={(e) => {
    //       e.stopPropagation();
    //       dispatch(closeModal);
    //     }}
    //   ></div>
    //   {children}
    // </div>

    <div
      className="bg-tertiary flex tablet:place-center absolute absolute-center  mx-auto z-10 rounded-md tablet:shadow-md shadow-gray-50 flex-col gap-y-8 inset-0"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div className="p-8 rounded-md tablet:shadow-md shadow-gray-50 flex flex-col gap-y-8 w-full w-full h-full tablet:h-auto tablet:max-w-[520px]">
        <button
          className="w-6 h-6 self-end flex tablet:hidden"
          onClick={(e) => {
            e.stopPropagation();
            console.log("click");
            onClose();
            // toggleLogin(e);
          }}
        >
          <EyeIcon />
        </button>
        {children}
      </div>
    </div>
  );
}

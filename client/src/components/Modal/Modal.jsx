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
    <div
      className="bg-white flex tablet:place-center absolute absolute-center mx-auto z-10 rounded-md tablet:shadow-md shadow-gray-50 flex-col gap-y-8 inset-0"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div className="p-8 rounded-md tablet:shadow-md shadow-gray-50 flex flex-col gap-y-8 w-full h-full tablet:h-auto tablet:max-w-[520px]">
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

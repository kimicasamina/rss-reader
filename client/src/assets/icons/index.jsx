import React from "react";

const HomeIcon = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill || "none"}
      strokeWidth="1.5"
      stroke="currentColor"
      className={className || "size-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
};

const MenuIcon = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill || "none"}
      strokeWidth="1.5"
      stroke="currentColor"
      className={className || "size-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};

const EditIcon = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill || "none"}
      strokeWidth="1.5"
      stroke="currentColor"
      className={className || "size-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
      />
    </svg>
  );
};

const UserIcon = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill || "none"}
      strokeWidth="1.5"
      stroke="currentColor"
      className={className || "size-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
};

const LogoutIcon = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill || "none"}
      strokeWidth="1.5"
      stroke="currentColor"
      className={className || "size-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
      />
    </svg>
  );
};

const LoginIcon = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill || "none"}
      strokeWidth="1.5"
      stroke="currentColor"
      className={className || "size-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
      />
    </svg>
  );
};

const SettingsIcon = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill || "none"}
      strokeWidth="1.5"
      stroke="currentColor"
      className={className || "size-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
};

const SearchIcon = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill || "none"}
      strokeWidth="1.5"
      stroke="currentColor"
      className={className || "size-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
};

const AddFolderIcon = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill || "none"}
      strokeWidth="1.5"
      stroke="currentColor"
      className={className || "size-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
      />
    </svg>
  );
};

const AddIcon = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill || "none"}
      strokeWidth="1.5"
      stroke="currentColor"
      className={className || "size-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};

const FolderIcon = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill || "none"}
      strokeWidth="1.5"
      stroke="currentColor"
      className={className || "size-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
      />
    </svg>
  );
};

const FacebookIcon = ({ fill, className }) => {
  return (
    <svg
      width="21"
      height="21"
      fill={fill || "white"}
      className={className || "size-6"}
      viewBox="0 0 21 21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5001 0C4.7011 0 0 4.72075 0 10.544C0 15.7667 3.78548 20.092 8.74886 20.9296V12.7437H6.21594V9.79796H8.74886V7.62588C8.74886 5.10564 10.2817 3.73225 12.5209 3.73225C13.5934 3.73225 14.515 3.8125 14.7826 3.84784V6.48217L13.2295 6.48292C12.012 6.48292 11.7773 7.06377 11.7773 7.91643V9.79645H14.6824L14.3035 12.7422H11.7773V21C16.9724 20.3651 21 15.9296 21 10.5409C21 4.72075 16.2989 0 10.5001 0Z"
        fill=""
      />
    </svg>
  );
};

const TwitterIcon = ({ fill, className }) => {
  return (
    <svg
      width="23"
      height="19"
      fill={fill || "white"}
      className={className || null}
      viewBox="0 0 23 19"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 2.24931C22.1447 2.63077 21.2333 2.88362 20.2831 3.00638C21.2606 2.413 22.0067 1.48054 22.3574 0.356615C21.4461 0.909077 20.4398 1.29931 19.3674 1.51708C18.5021 0.580231 17.2687 0 15.9232 0C13.3127 0 11.2111 2.15431 11.2111 4.79531C11.2111 5.17531 11.2427 5.54069 11.3203 5.88854C7.40025 5.69415 3.93156 3.78392 1.60137 0.874C1.19456 1.59162 0.955938 2.413 0.955938 3.29723C0.955938 4.95754 1.79688 6.42931 3.05037 7.28138C2.29281 7.26677 1.54962 7.04315 0.92 6.69092C0.92 6.70554 0.92 6.72454 0.92 6.74354C0.92 9.07323 2.55444 11.0083 4.69775 11.4541C4.31394 11.5608 3.89562 11.6119 3.4615 11.6119C3.15963 11.6119 2.85487 11.5944 2.56881 11.5301C3.17975 13.4286 4.91338 14.8244 6.97475 14.8697C5.3705 16.1456 3.33356 16.9144 1.12844 16.9144C0.74175 16.9144 0.370875 16.8968 0 16.8486C2.08869 18.2181 4.56406 19 7.2335 19C15.9102 19 20.654 11.6923 20.654 5.358C20.654 5.14608 20.6468 4.94146 20.6367 4.73831C21.5726 4.06308 22.3589 3.21977 23 2.24931Z"
        fill=""
      />
    </svg>
  );
};

const RestartIcon = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || "transparent"}
      className={`${className} size-6`}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </svg>
  );
};

const ShareIcon = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || "none"}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      class={className || "size-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
      />
    </svg>
  );
};
const BookmarkIcon = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || "none"}
      className={className || "size-6"}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
      />
    </svg>
  );
};

const TagIcon = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || "none"}
      className={className || "size-6"}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 6h.008v.008H6V6Z"
      />
    </svg>
  );
};

const EyeIcon = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill={fill || "none"}
      className={className || "size-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
};

const EyeSlashIcon = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill={fill || "none"}
      className={className || "size-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  );
};

const XMarkIcon = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      fill={fill}
      className={className || "size-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};

const RssIcon = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      fill={fill || "none"}
      className={className || "size-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
    </svg>
  );
};

const AdjustmentIcon = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      fill={fill || "none"}
      className={className || "size-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
      />
    </svg>
  );
};

const TrashIcon = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      fill={fill || "none"}
      className={className || "size-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
      />
    </svg>
  );
};

const CheckboxBlankIcon = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`${className}`}
      fill={`${fill} currentColor`}
    >
      <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5Z"></path>
    </svg>
  );
};

const CheckboxLineIcon = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`${className}`}
      fill={`${fill}`}
    >
      <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
    </svg>
  );
};

export {
  CheckboxBlankIcon,
  CheckboxLineIcon,
  TrashIcon,
  HomeIcon,
  MenuIcon,
  EditIcon,
  UserIcon,
  LogoutIcon,
  LoginIcon,
  SettingsIcon,
  SearchIcon,
  AddFolderIcon,
  AddIcon,
  FolderIcon,
  FacebookIcon,
  TwitterIcon,
  RestartIcon,
  ShareIcon,
  BookmarkIcon,
  TagIcon,
  EyeIcon,
  EyeSlashIcon,
  RssIcon,
  AdjustmentIcon,
  XMarkIcon,
};

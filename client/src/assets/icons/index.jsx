import React from "react";

export const HomeIcon = ({ fill, stroke, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || "none"}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={stroke || "currentColor"}
      class={className || "size-6"}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
};

export const MenuIcon = ({ fill, stroke, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || "none"}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={stroke || "currentColor"}
      class={className || "size-6"}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};

export const EditIcon = ({ fill, stroke, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || "none"}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={stroke || "currentColor"}
      class={className || "size-6"}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
      />
    </svg>
  );
};

export const UserIcon = ({ fill, stroke, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || "none"}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={stroke || "currentColor"}
      class={className || "size-6"}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
};

export const LogoutIcon = ({ fill, stroke, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || "none"}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={stroke || "currentColor"}
      class={className || "size-6"}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
      />
    </svg>
  );
};

export const LoginIcon = ({ fill, stroke, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || "none"}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={stroke || "currentColor"}
      class={className || "size-6"}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
      />
    </svg>
  );
};

export const SettingsIcon = ({ fill, stroke, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || "none"}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={stroke || "currentColor"}
      class={className || "size-6"}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
};

export const SearchIcon = ({ fill, stroke, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || "none"}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={stroke || "currentColor"}
      class={className || "size-6"}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
};

export const AddFolderIcon = ({ fill, stroke, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || "none"}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={stroke || "currentColor"}
      class={className || "size-6"}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
      />
    </svg>
  );
};

export const AddIcon = ({ fill, stroke, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || "none"}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={stroke || "currentColor"}
      class={className || "size-6"}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};

export const FolderIcon = ({ fill, stroke, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || "none"}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={stroke || "currentColor"}
      class={className || "size-6"}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
      />
    </svg>
  );
};

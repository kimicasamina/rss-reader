import React from "react";
<<<<<<< HEAD

// icons
import { UserIcon } from "../../../../assets/icons";

// auth
import { useAuth } from "../../../../context/useAuth";
=======
import { useAuth } from "../../../../context/useAuth";
import { UserIcon } from "../../../../assets/icons";
import { LoginIcon, LogoutIcon } from "../../../../assets/icons";
>>>>>>> deletefeed

export default function User() {
  const { user } = useAuth();
  return (
    <>
      {user ? (
        <div className="flex items-center gap-x-2 mb-2">
          <UserIcon
            className={"hover:animation-ease-in-out h-6 cursor-pointer "}
          />
          <h2 className="text-secondary">{user.username}</h2>
        </div>
      ) : null}
    </>
  );
}

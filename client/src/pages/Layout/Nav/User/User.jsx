import React from "react";

// icons
import { UserIcon } from "../../../../assets/icons";

// auth
import { useAuth } from "../../../../context/useAuth";

export default function User() {
  const { user } = useAuth();
  return (
    <>
      {user ? (
        <div className="flex items-center gap-x-2">
          <UserIcon
            className={"hover:animation-ease-in-out h-6 cursor-pointer "}
          />
          <h2 className="text-secondary">{user.username}</h2>
        </div>
      ) : null}
    </>
  );
}

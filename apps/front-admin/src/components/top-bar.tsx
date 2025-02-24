"use client";

import { Button } from "@workspace/ui/components/button";
import LoginModal from "@/components/modals/login-modal";
import { globalStore } from "@/store/auth.store";

const TopBar = () => {
  const { user } = globalStore();
  return (
    <div
      className={
        "absolute shadow-md px-5 bg-black/24 h-[50px] w-full flex flex-row items-center"
      }
    >
      {user ? (
        <p className={"ml-auto"}>{user.userName}</p>
      ) : (
        <LoginModal>
          <Button className={"ml-auto"} variant={"secondary"}>
            Login
          </Button>
        </LoginModal>
      )}
    </div>
  );
};

export default TopBar;

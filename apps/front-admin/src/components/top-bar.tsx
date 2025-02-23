"use client";

import { Button } from "@workspace/ui/components/button";
import LoginModal from "@/components/modals/login-modal";
import { getUserInfoQuery } from "@/hooks/queries/get-user-info-query";

const TopBar = () => {
  const { data } = getUserInfoQuery();
  return (
    <div
      className={
        "absolute shadow-md px-5 bg-black/24 h-[50px] w-full flex flex-row items-center"
      }
    >
      <LoginModal>
        <Button className={"ml-auto"} variant={"secondary"}>
          Login
        </Button>
      </LoginModal>
    </div>
  );
};

export default TopBar;

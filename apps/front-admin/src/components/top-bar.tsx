import { Button } from "@workspace/ui/components/button";

const TopBar = () => {
  return (
    <div
      className={
        "absolute shadow-md px-5 bg-black/24 h-[50px] w-full flex flex-row items-center"
      }
    >
      <Button className={"ml-auto"} variant={"secondary"}>
        Login
      </Button>
    </div>
  );
};

export default TopBar;

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import UserInfo from "./UserInfo";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-white bg-opacity-75 dark:bg-black mx-auto py-2 px-8 border-b border-zinc-300 sticky inset-x-0 top-0 z-10">
      <div className="flex justify-between items-center gap-2 max-w-7xl">
        <Link href="/">
          <p className="border-2 border-b-4 border-r-4 border-black dark:border-white rounded-lg p-2 text-xl font-bold transition-all hover:-translate-y-[2px]">
            Ecommerce
          </p>
        </Link>
        <div className="flex gap-4">
          <ThemeToggle />
          <UserInfo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

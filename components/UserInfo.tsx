"use client";
import React from "react";
import SignInButton from "./SignInButton";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LogOut } from "lucide-react";

type Props = {};

const UserInfo = (props: Props) => {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              <div>
                {session.user.name && <p>{session.user.name}</p>}
                {session.user.email && (
                  <p className="font-normal">
                    {<p className="font-normal">{session.user.email}</p>}
                  </p>
                )}
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()}>
              <div className="flex text-red-500">
                Sign out
                <LogOut className="ml-2 w-4 h-4" />
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <SignInButton text="Sign In" />
      )}

      {/* <SignInButton text="Sign In" className="dark:bg-orange-500" /> */}
    </>
  );
};

export default UserInfo;

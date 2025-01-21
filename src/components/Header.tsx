"use client";

import Link from "next/link";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { HomeIcon, File, UserRound, LogOut } from "lucide-react";
import { NavButton } from "@/components/NavButton";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
      <div className="flex h-8 w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <NavButton icon={HomeIcon} label="Home" href="/home" />

          <Link
            href="/home"
            className="flex items-center justify-center gap-2 ml-0"
            title="Home"
          >
            <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
              Computer Repair Shop
            </h1>
          </Link>
        </div>
        <div className="flex items-center">
          <NavButton icon={File} label="Tickets" href="/tickets" />
          <NavButton icon={UserRound} label="Customers" href="/customers" />
          <ModeToggle />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Logout"
            title="Logout"
            className="rounded-full"
            asChild
          >
            <LogoutLink>
              <LogOut />
            </LogoutLink>
          </Button>
        </div>
      </div>
    </header>
  );
};

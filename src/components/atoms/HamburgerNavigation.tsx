"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { AiOutlineMenu } from "react-icons/ai";
import { navigationNames } from "@/utils/navigationNames";

function HamburgerNavigation() {
  return (
    <NavigationMenu className=" lg:hidden">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <AiOutlineMenu className="text-zinc-50"/>
          </NavigationMenuTrigger>

          <NavigationMenuContent className="bg-default-black ">
            {navigationNames.map((navigation) => (
              <Link href={navigation.href} key={navigation.name}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>{navigation.name}</NavigationMenuLink>
              </Link>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default HamburgerNavigation;


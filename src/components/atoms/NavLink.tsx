import Link from "next/link";
import React from "react";

interface props {
  children: React.ReactNode;
  href: string;
}

function NavLink({ children, href }: props) {
  return (
    <Link href={href} className="flex justify-start items-center gap-1 py-3 px-4 mt-4 text-base hover:bg-primary rounded-sm">
      {children}
    </Link>
  );
}

export default NavLink;


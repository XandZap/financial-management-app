import Link from "next/link";

interface props {
  href: string;
  children: React.ReactNode;
}

function EmptyAlert({ href, children }: props) {
  return (
    <div className="text-center m-10 bg-default-black/10 rounded shadow-md">
      <Link href={href} className="text-primary/80 font-semibold">
        {children}
      </Link>
    </div>
  );
}

export default EmptyAlert;


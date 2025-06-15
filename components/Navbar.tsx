"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our Work" },
  { href: "/partners", label: "Partners" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-md">
        <Link href="/" className="text-lg font-bold text-primary-600">
          Laqta
        </Link>
        <ul className="flex gap-lg">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${pathname === href ? "text-primary-600 font-semibold" : "text-neutral-500 hover:text-primary-600 transition"}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

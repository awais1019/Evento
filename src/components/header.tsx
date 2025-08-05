import Link from "next/link";
import Logo from "./logo";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all",
  },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between px-3 sm:px-9 h-14 border-b border-white/10">
      <Logo />
      <nav>
        <ul className="flex space-x-4 text-sm">
          {routes.map((route) => (
            <li
              className="text-white/50 hover:text-white transition-colors duration-200"
              key={route.name}
            >
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

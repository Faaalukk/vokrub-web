import Link from "next/link";
import { LayoutDashboard, Sun, Swords, User } from "lucide-react";

export default function Sidebar() {
  return (
    <nav className="w-64 h-screen bg-primary text-white">
      <div className="flex flex-col gap-4 px-4 py-4 mt-2">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-green-700 rounded-lg flex items-center justify-center">
            <span className="text-white text-lg">✦</span>
          </div>
          <span className="text-xl font-bold">Vokrub</span>
        </div>
        <span className="font-jetbrains text-[oklch(0.6_0.01_150)] text-xs py-2">
          ADMIN CONSOLE
        </span>
        {/* Nav Items */}
        <Link
          href="/overview"
          className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-800 text-green-400"
        >
          <Sun size={18} />
          <span>Overview</span>
        </Link>
        <Link
          href="/customer"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-300"
        >
          <LayoutDashboard size={18} />
          <span>Customers</span>
        </Link>
        <Link
          href="/earning"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-300"
        >
          <Swords size={18} />
          <span>Earning</span>
        </Link>
        <Link
          href="/permission"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-300"
        >
          <User size={18} />
          <span>Permission</span>
        </Link>
      </div>
    </nav>
  );
}

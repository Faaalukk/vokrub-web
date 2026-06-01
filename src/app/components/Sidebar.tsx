"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Sun, Swords, User } from "lucide-react";

const navItems = [
  { href: "/overview", label: "Overview", icon: Sun },
  { href: "/customer", label: "Customers", icon: LayoutDashboard },
  { href: "/earning", label: "Earning", icon: Swords },
  { href: "/permission", label: "Permission", icon: User },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <nav className="w-64 h-screen bg-primary text-white border-r-2 border-gray-700">
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
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                ${isActive
                  ? "bg-gray-800 text-green-400"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
            >
              <Icon size={18} />
              <span>{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  );
}

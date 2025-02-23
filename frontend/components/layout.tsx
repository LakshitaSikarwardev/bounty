"use client"

import type React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "Mint", path: "/mint" },
  { name: "Merge", path: "/merge" },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <motion.h1 className="text-2xl font-bold text-white" whileHover={{ scale: 1.05 }}>
              Mutant NFTs
            </motion.h1>
          </Link>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path}>
                  <Button variant="ghost" className="text-white hover:text-gray-200">
                    {item.name}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
      <footer className="container mx-auto px-4 py-6 text-center text-white">
        <p>&copy; 2025 Mutant NFTs. All rights reserved.</p>
      </footer>
    </div>
  )
}


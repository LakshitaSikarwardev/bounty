"use client"

import { motion } from "framer-motion"
import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <Layout>
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-white mb-6">Welcome to Mutant NFTs</h1>
        <p className="text-xl text-white mb-8">Discover, mint, and merge unique digital creatures</p>
        <div className="space-x-4">
          <Link href="/gallery">
            <Button size="lg">Explore Gallery</Button>
          </Link>
          <Link href="/mint">
            <Button size="lg" variant="outline">
              Mint NFT
            </Button>
          </Link>
        </div>
      </motion.div>
    </Layout>
  )
}


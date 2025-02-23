"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Layout from "@/components/layout"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const dummyNFTs = [
  { id: 1, name: "Mutant Creature #1", type: "Type 1", image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Mutant Creature #2", type: "Type 2", image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Mutant Creature #3", type: "Type 1", image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Mutant Creature #4", type: "Type 2", image: "/placeholder.svg?height=200&width=200" },
]

export default function Gallery() {
  const [selectedNFT, setSelectedNFT] = useState(null)

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-white mb-6">NFT Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyNFTs.map((nft) => (
          <motion.div key={nft.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>{nft.name}</CardTitle>
                <CardDescription>Type: {nft.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <img src={nft.image || "/placeholder.svg"} alt={nft.name} className="w-full h-48 object-cover" />
              </CardContent>
              <CardFooter>
                <Button onClick={() => setSelectedNFT(nft)} className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      {selectedNFT && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Card className="w-96">
            <CardHeader>
              <CardTitle>{selectedNFT.name}</CardTitle>
              <CardDescription>Type: {selectedNFT.type}</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={selectedNFT.image || "/placeholder.svg"}
                alt={selectedNFT.name}
                className="w-full h-64 object-cover"
              />
            </CardContent>
            <CardFooter>
              <Button onClick={() => setSelectedNFT(null)} className="w-full">
                Close
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      )}
    </Layout>
  )
}


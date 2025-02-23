"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Layout from "@/components/layout"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Merge() {
  const [tokenId1, setTokenId1] = useState("")
  const [tokenId2, setTokenId2] = useState("")

  const handleMerge = () => {
    if (!tokenId1 || !tokenId2) {
      toast.error("Please enter both token IDs")
      return
    }
    // Here you would typically interact with the blockchain
    toast.success(`Merging NFTs ${tokenId1} and ${tokenId2}... (This is a simulation)`)
  }

  return (
    <Layout>
      <ToastContainer />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl font-bold text-white mb-6">Merge NFTs</h1>
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Combine Your Mutant NFTs</CardTitle>
            <CardDescription>Enter the token IDs of the NFTs you want to merge</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="tokenId1">Token ID 1</Label>
              <Input
                id="tokenId1"
                value={tokenId1}
                onChange={(e) => setTokenId1(e.target.value)}
                placeholder="Enter first token ID"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tokenId2">Token ID 2</Label>
              <Input
                id="tokenId2"
                value={tokenId2}
                onChange={(e) => setTokenId2(e.target.value)}
                placeholder="Enter second token ID"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleMerge} className="w-full">
              Merge NFTs
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </Layout>
  )
}


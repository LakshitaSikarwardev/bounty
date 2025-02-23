"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Layout from "@/components/layout"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Mint() {
  const [nftType, setNftType] = useState("")

  const handleMint = () => {
    if (!nftType) {
      toast.error("Please select an NFT type")
      return
    }
    // Here you would typically interact with the blockchain
    toast.success(`Minting ${nftType} NFT... (This is a simulation)`)
  }

  return (
    <Layout>
      <ToastContainer />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl font-bold text-white mb-6">Mint New NFT</h1>
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Create Your Mutant NFT</CardTitle>
            <CardDescription>Choose a type and mint your new creature</CardDescription>
          </CardHeader>
          <CardContent>
            <Select onValueChange={setNftType}>
              <SelectTrigger>
                <SelectValue placeholder="Select NFT Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Type 1">Type 1</SelectItem>
                <SelectItem value="Type 2">Type 2</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
          <CardFooter>
            <Button onClick={handleMint} className="w-full">
              Mint NFT
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </Layout>
  )
}


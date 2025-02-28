"use client"
import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Expand, X } from "lucide-react"

const drawings = [
  { id: 1, src: "/placeholder.svg?height=600&width=600", alt: "Drawing 1", title: "Cosmic Dreams" },
  { id: 2, src: "/placeholder.svg?height=600&width=600", alt: "Drawing 2", title: "Neon Nights" },
  { id: 3, src: "/placeholder.svg?height=600&width=600", alt: "Drawing 3", title: "Digital Dystopia" },
  { id: 4, src: "/placeholder.svg?height=600&width=600", alt: "Drawing 4", title: "Cyberpunk City" },
  { id: 5, src: "/placeholder.svg?height=600&width=600", alt: "Drawing 5", title: "Quantum Realms" },
  { id: 6, src: "/placeholder.svg?height=600&width=600", alt: "Drawing 6", title: "Astral Projections" },
]

export default function DrawingGallery() {
  const [selectedDrawing, setSelectedDrawing] = useState(null)

  return (
    <div className="px-4 py-6 sm:px-0">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {drawings.map((drawing) => (
          <motion.div
            key={drawing.id}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Dialog onOpenChange={(open) => !open && setSelectedDrawing(null)}>
              <DialogTrigger asChild>
                <div
                  className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-square"
                  onClick={() => setSelectedDrawing(drawing)}
                >
                  <Image
                    src={drawing.src || "/placeholder.svg"}
                    alt={drawing.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="outline" size="icon">
                      <Expand className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] max-h-[90vh] p-0 bg-transparent border-0">
                {selectedDrawing && (
                  <div className="relative w-full h-full flex flex-col items-center">
                    <div className="relative w-full h-[calc(100vh-10rem)] max-h-[80vh]">
                      <Image
                        src={selectedDrawing.src || "/placeholder.svg"}
                        alt={selectedDrawing.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="w-full p-4 bg-gray-800 rounded-b-lg">
                      <h2 className="text-2xl font-bold text-gray-100">{selectedDrawing.title}</h2>
                    </div>
                    <Button
                      className="absolute top-2 right-2 bg-gray-800 hover:bg-gray-700"
                      size="icon"
                      onClick={() => setSelectedDrawing(null)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </DialogContent>
            </Dialog>
            <h3 className="mt-2 text-xl font-semibold text-gray-100">{drawing.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}


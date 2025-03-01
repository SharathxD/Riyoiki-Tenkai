"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Expand, X } from "lucide-react";

const drawings = [
  { id: 1, src: "Designer.jpeg?height=600&width=600", alt: "Drawing 1", title: "Cosmic Dreams" },
  { id: 2, src: "Designer.jpeg?height=600&width=600", alt: "Drawing 2", title: "Neon Nights" },
  { id: 3, src: "Designer.jpeg?height=600&width=600", alt: "Drawing 3", title: "Digital Dystopia" },
  { id: 4, src: "Designer.jpeg?height=600&width=600", alt: "Drawing 4", title: "Cyberpunk City" },
  { id: 5, src: "Designer.jpeg?height=600&width=600", alt: "Drawing 5", title: "Quantum Realms" },
  { id: 6, src: "Designer.jpeg?height=600&width=600", alt: "Drawing 6", title: "Astral Projections" },
  { id: 7, src: "Designer.jpeg?height=600&width=600", alt: "Drawing 1", title: "Cosmic Dreams" },
  { id: 8, src: "Designer.jpeg?height=600&width=600", alt: "Drawing 2", title: "Neon Nights" },
  { id: 9, src: "Designer.jpeg?height=600&width=600", alt: "Drawing 3", title: "Digital Dystopia" },
  { id: 10, src: "Designer.jpeg?height=600&width=600", alt: "Drawing 4", title: "Cyberpunk City" },
  { id: 11, src: "Designer.jpeg?height=600&width=600", alt: "Drawing 5", title: "Quantum Realms" },
  { id: 12, src: "Designer.jpeg?height=600&width=600", alt: "Drawing 6", title: "Astral Projections" },
];

export default function DrawingGallery() {
  const [selectedDrawing, setSelectedDrawing] = useState<null | typeof drawings[number]>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (drawing: typeof drawings[number]) => {
    setSelectedDrawing(drawing);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setSelectedDrawing(null);
    }, 300);
  };

  return (
    <div className="px-4 py-6 sm:px-0 bg-black text-white">
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
            <div className="relative">
              <div
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-square"
                onClick={() => handleOpen(drawing)}
              >
                <Image
                  src={drawing.src || "/placeholder.svg"}
                  alt={drawing.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="outline" size="icon">
                    <Expand className="h-6 w-6 glow-text" />
                  </Button>
                </div>
              </div>
              <h3 className="mt-2 text-xl font-semibold glow-text">
                {drawing.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Render a single Dialog for the selected drawing */}
      {selectedDrawing && (
        <Dialog open={open} onOpenChange={(isOpen) => { if (!isOpen) handleClose(); }}>
          <DialogContent className="sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] max-h-[90vh] p-0 bg-transparent border-0">
            <div className="relative w-full h-full flex flex-col items-center">
              <div className="relative w-full h-[calc(100vh-10rem)] max-h-[80vh]">
                <Image
                  src={selectedDrawing.src || "/placeholder.svg"}
                  alt={selectedDrawing.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-full p-4 bg-black rounded-b-lg">
                <h2 className="text-2xl font-bold glow-text">
                  {selectedDrawing.title}
                </h2>
              </div>
              <Button
                className="absolute top-2 right-2 bg-black hover:bg-gray-800"
                size="icon"
                onClick={handleClose}
              >
                <X className="h-4 w-4 glow-text" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

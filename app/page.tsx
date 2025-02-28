import DrawingGallery from "@/components/DrawingGallery"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          Digital Dreamscapes
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto">
          Explore a collection of surreal digital art that pushes the boundaries of imagination
        </p>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <DrawingGallery />
      </main>
    </div>
  )
}


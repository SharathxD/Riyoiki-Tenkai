import DrawingGallery from "@/components/DrawingGallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="glow-text text-5xl font-bold tracking-tight mb-4">
          Malevolent Shrine of ART
        </h1>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <DrawingGallery />
      </main>
    </div>
  );
}

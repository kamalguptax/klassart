import { Lock } from 'lucide-react';

export default function ImagesToImages() {
  const lockedImages = [1, 2, 3]; // dummy array for locked thumbnails

  return (
    <div className="min-h-screenflex flex-col items-center gap-6">
      {/* Main Images */}
      <div className="flex flex-col md:flex-row mb-5 gap-4">
        {/* Original Image */}
        <div className="w-full md:w-1/2">
            <img
            src="/assets/images/ai-imagetoimage01.jpg" // replace with actual image
            alt="Original"
            className="w-full rounded-md object-cover"
            />
        </div>

        {/* Enhanced Image with Preview Overlay */}
        <div className="w-full md:w-1/2 relative">
            <img
                src="/assets/images/ai-imagetoimage02.jpg" // replace with actual image
                alt="Enhanced"
                className="w-full rounded-md object-cover"
            />
            <button className="absolute left-0 bottom-0 w-full bg-black/60 hover:bg-black/80 active:bg-black text-white text-center py-4 rounded-b-md transition">
                Preview
            </button>
        </div>
      </div>

      {/* Thumbnail Row */}
      <div className="flex gap-3 justify-center p-10">
        {/* First Unlocked Thumbnail */}
        <img
          src="/assets/images/ai-sm-imagetoimage.jpg"
          alt="Thumbnail 1"
          className="w-[217px] h-[145px] object-cover"
        />

        {/* Locked Thumbnails */}
        {lockedImages.map((id) => (
          <div
            key={id}
            className="relative w-[217px] h-[145px] overflow-hidden"
          >
            <img
              src="/assets/images/ai-sm-imagetoimage.jpg"
              alt={`Locked ${id}`}
              className="w-full h-full object-cover blur-sm brightness-95"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Lock className="text-white w-6 h-6" />
            </div>
          </div>
        ))}
      </div>

        <div className="flex gap-4 justify-center items-center p-4">
        {/* List market place button */}
        <button className="px-6 py-3 text-blue-600 font-semibold border border-blue-500 rounded-md bg-white shadow-md hover:bg-blue-50 transition">
            List market place
        </button>

        {/* Customize button */}
        <button className="px-6 py-3 text-white font-semibold rounded-md bg-gradient-to-r from-purple-400 to-blue-500 shadow-lg hover:opacity-90 transition">
            Customize
        </button>
        </div>
    </div>
  );
}

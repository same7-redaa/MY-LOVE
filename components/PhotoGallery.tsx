import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Hand } from 'lucide-react';

interface GalleryItem {
  url: string;
  text: string;
}

interface PhotoGalleryProps {
  items: GalleryItem[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotate: direction > 0 ? 10 : -10,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotate: direction < 0 ? 10 : -10,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + items.length) % items.length);
  };

  return (
    <>
      {/* Mobile View: Interactive Card Stack */}
      <div className="sm:hidden w-full min-h-[70vh] flex flex-col items-center justify-start pt-4 relative overflow-hidden">
        
        <div className="mb-4 text-pink-400 flex items-center gap-2 text-sm opacity-80 animate-pulse">
            <Hand className="w-4 h-4" />
            <span>اسحبي الصورة لليمين أو اليسار</span>
        </div>

        <div className="relative w-full h-[500px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                rotate: { duration: 0.4 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x;
                if (swipe < -50) {
                    paginate(1);
                } else if (swipe > 50) {
                    paginate(-1);
                }
                }}
                className="absolute w-[85%] aspect-[3/4] bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white select-none cursor-grab active:cursor-grabbing touch-pan-y"
                style={{ touchAction: "none" }}
            >
                <img
                src={items[index].url}
                alt={items[index].text}
                className="w-full h-full object-cover pointer-events-none"
                draggable="false"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/95 via-pink-900/30 to-transparent flex items-end justify-center pb-10">
                <div className="flex flex-col items-center gap-3 text-white px-6 text-center">
                    <Heart className="w-10 h-10 fill-red-500 text-red-500 animate-pulse" />
                    <span className="font-stc text-2xl font-bold text-shadow-sm leading-relaxed drop-shadow-md">
                    {items[index].text}
                    </span>
                </div>
                </div>
            </motion.div>
            </AnimatePresence>
        </div>
      </div>

      {/* Desktop/Tablet View: Grid */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 p-4 max-w-7xl mx-auto relative z-10">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
            className="group relative overflow-hidden rounded-3xl shadow-xl border-4 border-white bg-white rotate-1 hover:rotate-0 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-200"
          >
            <div className="aspect-[3/4] overflow-hidden relative">
              <img
                src={item.url}
                alt={`Love Memory ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Permanent Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/40 to-transparent flex items-end justify-center pb-6">
                <div className="flex flex-col items-center gap-2 text-white px-4 text-center">
                  <Heart className="w-6 h-6 fill-red-500 text-red-500 animate-pulse" />
                  <span className="font-stc text-xl md:text-2xl font-bold text-shadow-sm leading-relaxed">
                    {item.text}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default PhotoGallery;
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Heart } from 'lucide-react';

interface SpecialVideoProps {
  videoUrl: string;
}

const SpecialVideo: React.FC<SpecialVideoProps> = ({ videoUrl }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section className="w-full flex flex-col items-center py-12 px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-stc font-bold text-pink-700 flex items-center gap-3 justify-center">
          <Heart className="fill-pink-500 text-pink-500 animate-pulse" />
           لحظاتنا الحلوة
          <Heart className="fill-pink-500 text-pink-500 animate-pulse" />
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative max-w-[300px] w-full"
      >
        {/* Decorative elements */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-pink-400 to-rose-400 rounded-[2.5rem] opacity-40 blur-xl animate-pulse"></div>
        
        <div 
            className="relative bg-black rounded-[2rem] overflow-hidden border-[6px] border-white shadow-2xl aspect-[9/16] cursor-pointer group transform transition-transform duration-500 hover:-translate-y-2"
            onClick={() => setIsZoomed(true)}
        >
            {/* The player wrapper needs to ignore pointer events to allow the parent div to handle the click */}
            <div className="w-full h-full pointer-events-none">
                <ReactPlayer
                    url={videoUrl}
                    width="100%"
                    height="100%"
                    playing={true}
                    muted={true}
                    loop={true}
                    playsinline={true}
                    config={{
                        youtube: {
                            playerVars: { 
                                showinfo: 0, 
                                controls: 0, 
                                modestbranding: 1, 
                                rel: 0,
                                fs: 0,
                                iv_load_policy: 3
                            }
                        }
                    }}
                />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center">
                 <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/50 mb-4"
                 >
                    <Maximize2 className="text-white w-8 h-8" />
                 </motion.div>
                 <span className="text-white font-stc font-bold text-lg">اضغط للمشاهدة</span>
            </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-pink-950/90 backdrop-blur-md p-4"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-md aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20"
              onClick={e => e.stopPropagation()}
            >
               <button
                  onClick={() => setIsZoomed(false)}
                  className="absolute top-4 left-4 z-10 p-2 bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur-md transition-colors border border-white/20"
                >
                  <X size={24} />
                </button>
                
                <ReactPlayer
                    url={videoUrl}
                    width="100%"
                    height="100%"
                    playing={true}
                    controls={true}
                    loop={true}
                    muted={false} // Unmute in modal
                    config={{
                        youtube: {
                            playerVars: { autoplay: 1 }
                        }
                    }}
                />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SpecialVideo;
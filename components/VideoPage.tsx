import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowLeft, Stars, Quote, Mail } from 'lucide-react';

interface VideoPageProps {
  onNext: () => void;
}

const VideoPage: React.FC<VideoPageProps> = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 relative z-20 text-center pb-20"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto w-full"
      >
        <div className="flex items-center justify-center gap-3 mb-8">
             <Heart className="text-red-500 fill-red-500 animate-bounce" size={32} />
             <h2 className="text-4xl md:text-6xl font-stc font-bold text-pink-700 drop-shadow-sm">
              كلمتين ليكي
            </h2>
            <Heart className="text-red-500 fill-red-500 animate-bounce" size={32} />
        </div>
        
        <div className="relative bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[3rem] border-2 border-pink-200 shadow-xl shadow-pink-200/50">
            <Quote className="absolute top-8 right-8 text-pink-300 w-12 h-12 rotate-180 opacity-50" />
            
            <div className="flex flex-col gap-6 py-4">
              <p className="text-2xl md:text-4xl text-pink-900 font-bold leading-loose font-stc">
                " كل ثانية بتعدي وانتي معايا بتكون أحلى وقت في عمري.. 
              </p>
              
              <div className="h-px w-1/2 bg-pink-300 mx-auto my-2"></div>
              
              <p className="text-2xl md:text-4xl text-pink-800 font-bold leading-loose font-stc">
                ربنا يخليكي ليا وما يحرمني منك أبداً يا أغلى حاجة في دنيتي "
              </p>
            </div>

            <Quote className="absolute bottom-8 left-8 text-pink-300 w-12 h-12 opacity-50" />
            
            <div className="absolute -bottom-6 -right-6 text-red-500 animate-pulse delay-700">
               <Heart size={48} fill="currentColor" />
            </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-16"
      >
        <button
          onClick={onNext}
          className="group px-10 py-5 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full font-bold text-2xl shadow-xl shadow-pink-500/40 flex items-center gap-4 hover:from-pink-600 hover:to-rose-700 hover:scale-105 transition-all border-4 border-white/30"
        >
          <ArrowLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
          <span>عندي ليكي رسالة</span>
          <Mail className="w-6 h-6 animate-bounce" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default VideoPage;
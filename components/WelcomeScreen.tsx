import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  onEnter: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onEnter }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-100 to-red-100 font-stc"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="text-center p-8 relative w-full max-w-4xl mx-auto">
         {/* Animated background hearts for the splash screen specifically */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-pink-500 opacity-20"
                    initial={{ scale: 0, x: 0, y: 0 }}
                    animate={{ 
                        scale: [1, 1.5, 1], 
                        x: [0, (Math.random() - 0.5) * 300], 
                        y: [0, (Math.random() - 0.5) * 300],
                        opacity: [0.1, 0.3, 0.1],
                        rotate: [0, 45, -45, 0]
                    }}
                    transition={{
                        duration: 4 + Math.random() * 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    style={{
                        left: '50%',
                        top: '50%',
                    }}
                >
                    <Heart size={30 + Math.random() * 80} fill="currentColor" />
                </motion.div>
            ))}
         </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative z-10 flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="mb-6 bg-white/40 p-6 rounded-full border-4 border-white shadow-xl backdrop-blur-sm"
          >
             <Heart size={64} className="text-red-500 fill-red-500 drop-shadow-lg" />
          </motion.div>

          <h1 className="font-fantezy text-6xl md:text-8xl font-bold text-pink-600 mb-2 drop-shadow-md leading-relaxed py-2">
            سامح <span className="text-pink-400">&</span> ياسمين
          </h1>
          
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-pink-400 to-transparent my-6"></div>

          <p className="text-2xl md:text-4xl text-pink-800 mb-10 font-bold leading-relaxed max-w-2xl">
            النهاردة عيد الحب، بس أنا كل أيامي معاكي عيد <br/>
            <span className="text-lg md:text-2xl mt-2 block font-medium opacity-80">يا أحلى حاجة حصلت في حياتي</span>
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onEnter}
            className="group relative px-10 py-5 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full shadow-xl shadow-pink-500/30 hover:shadow-pink-600/50 transition-all overflow-hidden border-2 border-white/20"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center gap-3 text-2xl font-bold">
              <Sparkles className="animate-spin-slow" />
               شوفي المفاجأة
              <Heart className="fill-white animate-pulse" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;
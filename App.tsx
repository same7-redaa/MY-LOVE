import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart, Stars } from 'lucide-react';
import { GALLERY_ITEMS } from './constants';
import HeartBackground from './components/HeartBackground';
import PhotoGallery from './components/PhotoGallery';
import AudioPlayer from './components/AudioPlayer';
import WelcomeScreen from './components/WelcomeScreen';
import VideoPage from './components/VideoPage';
import LoveLetter from './components/LoveLetter';

type ScreenState = 'welcome' | 'video' | 'letter' | 'gallery';

const App: React.FC = () => {
  const [screen, setScreen] = useState<ScreenState>('welcome');
  const [isAudioReady, setIsAudioReady] = useState(false);

  // Background music plays as long as we are not on the 'welcome' screen
  const isMusicPlaying = screen !== 'welcome';

  return (
    <div className="min-h-screen relative overflow-x-hidden text-right font-stc" dir="rtl">
      
      {/* Background Animation */}
      <HeartBackground />

      <AnimatePresence mode="wait">
        {screen === 'welcome' && (
          <WelcomeScreen key="welcome" onEnter={() => setScreen('video')} />
        )}

        {screen === 'video' && (
           <VideoPage 
             key="video" 
             onNext={() => setScreen('letter')} 
           />
        )}

        {screen === 'letter' && (
           <LoveLetter 
             key="letter"
             onNext={() => setScreen('gallery')}
           />
        )}

        {screen === 'gallery' && (
          <motion.div
            key="gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 flex flex-col items-center pb-24"
          >
            {/* Header */}
            <header className="w-full pt-16 pb-8 text-center px-4">
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col items-center"
              >
                 <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="inline-block p-4 rounded-full bg-white/40 backdrop-blur-sm shadow-lg mb-6 border-2 border-pink-200"
                 >
                    <Heart className="w-16 h-16 text-red-500 fill-red-500" />
                 </motion.div>
                
                <h1 className="font-fantezy text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-red-500 to-rose-600 drop-shadow-sm mb-6 leading-relaxed py-4">
                  سامح <span className="text-4xl align-middle text-pink-400">&</span> ياسمين
                </h1>
                
                <div className="bg-white/60 backdrop-blur-sm py-3 px-8 rounded-2xl shadow-sm border border-pink-100">
                    <p className="font-stc text-2xl md:text-4xl text-pink-800 font-bold leading-relaxed">
                     كل سنة واحنا سوا يا روح قلبي
                    </p>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="mt-4 text-xl text-pink-700/80 font-medium"
                >
                    ربنا ما يحرمني منك أبداً ❤️
                </motion.div>
              </motion.div>
            </header>
            
            {/* Gallery Section */}
            <main className="w-full">
               <PhotoGallery items={GALLERY_ITEMS} />
            </main>

            {/* Footer Message */}
            <motion.footer 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-16 text-center text-pink-800/60 font-stc text-xl pb-8"
            >
                <div className="flex items-center justify-center gap-2">
                    <Stars className="w-5 h-5" />
                    <p>قصة حبنا مكملة للعمر كله</p>
                    <Stars className="w-5 h-5" />
                </div>
            </motion.footer>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Audio Player Logic */}
      <AudioPlayer 
        playing={isMusicPlaying} 
        onReady={() => setIsAudioReady(true)} 
      />
    </div>
  );
};

export default App;
import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { YOUTUBE_URL } from '../constants';

interface AudioPlayerProps {
  playing: boolean;
  onReady: () => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ playing, onReady }) => {
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  // We keep the player hidden visually but active
  
  return (
    <div className="fixed bottom-4 left-4 z-40">
      {/* Hidden Player */}
      <div className="hidden">
        <ReactPlayer
          url={YOUTUBE_URL}
          playing={playing}
          muted={muted}
          volume={volume}
          loop={true}
          width="0"
          height="0"
          onReady={onReady}
          config={{
            youtube: {
              playerVars: { showinfo: 0, controls: 0 }
            }
          }}
        />
      </div>

      {/* Control Widget */}
      <div className={`bg-white/80 backdrop-blur-md border border-pink-200 shadow-lg rounded-full p-2 flex items-center gap-2 transition-transform duration-500 ${playing ? 'translate-y-0' : 'translate-y-20'}`}>
        <button
          onClick={() => setMuted(!muted)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-100 hover:bg-pink-200 text-pink-600 transition-colors"
          title={muted ? "Unmute" : "Mute"}
        >
          {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
        
        <div className="hidden sm:flex items-center gap-2 px-2 text-pink-800 text-sm font-medium">
            <Music size={16} className="animate-bounce" />
            <span className="whitespace-nowrap">موسيقى الحب</span>
        </div>

        <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={volume}
            onChange={(e) => {
                setVolume(parseFloat(e.target.value));
                if(parseFloat(e.target.value) > 0) setMuted(false);
            }}
            className="w-20 accent-pink-500 hidden sm:block"
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
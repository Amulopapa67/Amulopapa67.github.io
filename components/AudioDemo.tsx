
import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Layers, Mic, Music, FileAudio } from 'lucide-react';
import { AudioTrack } from '../types';

// Simulating audio visualization data
const generateBars = (count: number, seed: number) => {
  return Array.from({ length: count }, (_, i) => Math.max(10, Math.abs(Math.sin(i * 0.5 + seed) * 100)));
};

interface AudioDemoProps {
  tracks?: AudioTrack[];
}

const AudioDemo: React.FC<AudioDemoProps> = ({ tracks }) => {
  // Default fallback tracks if none provided
  const defaultTracks: AudioTrack[] = [
    { id: 'mix', label: 'Mix', src: '' },
    { id: 'vocal', label: 'Vocal', src: '' },
    { id: 'instr', label: 'Instr', src: '' }
  ];

  const activeTracks = tracks && tracks.length > 0 ? tracks : defaultTracks;

  const [activeTrackId, setActiveTrackId] = useState(activeTracks[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [bars, setBars] = useState<number[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize Audio
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.preload = 'auto';

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const p = (audioRef.current.currentTime / (audioRef.current.duration || 1)) * 100;
            setProgress(p);
        }
    };

    const handleEnded = () => {
        setIsPlaying(false);
        setProgress(0);
    };

    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    audioRef.current.addEventListener('ended', handleEnded);

    return () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
            audioRef.current.removeEventListener('ended', handleEnded);
        }
    };
  }, []);

  // Handle Track Switching
  useEffect(() => {
      if (!audioRef.current) return;
      
      const selectedTrack = activeTracks.find(t => t.id === activeTrackId);
      if (selectedTrack) {
          const wasPlaying = !audioRef.current.paused;
          const currTime = audioRef.current.currentTime;
          
          // Only change src if different to avoid reloading if somehow re-triggered with same track
          // Although current logic resets on id change which implies difference.
          audioRef.current.src = selectedTrack.src;
          // Restore timestamp to sync tracks
          audioRef.current.currentTime = currTime;

          if (wasPlaying) {
              audioRef.current.play().catch(e => console.error("Play error:", e));
          }
      }
  }, [activeTrackId, activeTracks]);

  // Play/Pause Toggle
  const togglePlayback = () => {
      if (!audioRef.current) return;

      if (isPlaying) {
          audioRef.current.pause();
      } else {
          // Ensure src is set on first play if not set by effect yet (rare but possible)
          if (!audioRef.current.src) {
               const t = activeTracks.find(track => track.id === activeTrackId);
               if (t) audioRef.current.src = t.src;
          }
          audioRef.current.play().catch(e => console.error("Play error:", e));
      }
      setIsPlaying(!isPlaying);
  };

  // Visualizer Loop
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setBars(generateBars(40, Date.now() / 100));
      }, 50);
    } else {
        setBars(generateBars(40, 0));
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleToggle = (trackId: string) => {
    setActiveTrackId(trackId);
    setBars(generateBars(40, Math.random() * 100));
  };
  
  // Seek handler
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!audioRef.current) return;
      const bounds = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const ratio = x / bounds.width;
      const newTime = ratio * (audioRef.current.duration || 0);
      if (isFinite(newTime)) {
          audioRef.current.currentTime = newTime;
          setProgress(ratio * 100);
      }
  };

  const getIcon = (id: string) => {
      const lowerId = id.toLowerCase();
      if (lowerId.includes('vocal')) return <Mic size={16} className="text-indigo-500" />;
      if (lowerId.includes('instr') || lowerId.includes('accompany')) return <Music size={16} className="text-emerald-500" />;
      if (lowerId.includes('mix')) return <Layers size={16} className="text-gray-800" />;
      return <FileAudio size={16} className="text-gray-500" />;
  };

  const getBarColor = () => {
      const lowerId = activeTrackId.toLowerCase();
      if (lowerId.includes('vocal')) return 'bg-indigo-500';
      if (lowerId.includes('instr') || lowerId.includes('accompany')) return 'bg-emerald-500';
      if (lowerId.includes('mix')) return 'bg-gray-800';
      return 'bg-gray-600';
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl p-6 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-red-500 animate-pulse' : 'bg-gray-300'}`}></div>
            <span className="text-xs font-mono uppercase text-gray-500 tracking-widest">
                {activeTracks.find(t => t.id === activeTrackId)?.label || 'Audio'} Playback
            </span>
        </div>
        <div className="flex gap-1 bg-gray-100 p-1 rounded-lg overflow-x-auto max-w-[200px] sm:max-w-none no-scrollbar">
            {activeTracks.map(track => (
                 <button 
                    key={track.id}
                    onClick={() => handleToggle(track.id)}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${activeTrackId === track.id ? 'bg-white shadow text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    {track.label}
                </button>
            ))}
        </div>
      </div>

      {/* Visualizer Area */}
      <div className="h-24 bg-gray-50 rounded-lg mb-4 flex items-end justify-center gap-[2px] p-4 overflow-hidden relative">
        {bars.map((h, i) => (
            <div 
                key={i} 
                className={`w-1.5 rounded-t-sm transition-all duration-100 ease-in-out ${getBarColor()}`}
                style={{ height: `${isPlaying ? h * (0.5 + Math.random() * 0.5) : h * 0.3}%` }}
            ></div>
        ))}
        {/* Progress Line */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-red-500 opacity-50 z-10 transition-all duration-100 ease-linear" style={{ left: `${progress}%` }}></div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        <button 
            onClick={togglePlayback}
            className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-accent transition-colors flex-shrink-0"
        >
            {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="ml-1" />}
        </button>
        
        <div className="flex-1 cursor-pointer group" onClick={handleSeek}>
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden relative">
                <div className="absolute inset-y-0 left-0 bg-gray-900 transition-all duration-100 ease-linear" style={{ width: `${progress}%` }}></div>
                {/* Hover indicator */}
                <div className="opacity-0 group-hover:opacity-100 absolute inset-y-0 bg-black/10 w-full transition-opacity"></div>
            </div>
        </div>

        <div className="flex items-center gap-2 text-gray-400">
            {getIcon(activeTrackId)}
        </div>
      </div>
      
      <div className="mt-3 text-xs text-gray-400 font-mono text-center">
        {activeTracks.find(t => t.id === activeTrackId)?.src ? 'Local Asset Playback' : 'Simulation'} • 44.1kHz
      </div>
    </div>
  );
};

export default AudioDemo;
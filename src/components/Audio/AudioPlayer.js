import { createContext, useContext, useState, useEffect } from 'react';
import { Howl } from 'howler';

const AudioPlayerContext = createContext();

export const useAudioPlayer = () => {
  return useContext(AudioPlayerContext);
};

const AudioPlayerProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const [audio] = useState(
    new Howl({
      src: ['/assets/music/bg.mp3'],
      loop: true,
      volume: 0.3,
      onplay: () => setIsPlaying(true), // Set isPlaying to true when audio starts playing
      onpause: () => setIsPlaying(false), // Set isPlaying to false when audio is paused
    })
  );

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <AudioPlayerContext.Provider value={{ togglePlay, isPlaying }}>
      {children}
    </AudioPlayerContext.Provider>
  );
};

export default AudioPlayerProvider;

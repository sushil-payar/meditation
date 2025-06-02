import React, { createContext, useContext, useState, useEffect } from 'react';
import { Audio } from 'expo-av';
import { Platform } from 'react-native';

export interface Track {
  id: string;
  title: string;
  artist: string;
  artwork: string;
  category: string;
  duration: number; // in seconds
  url: string;
}

interface AudioContextType {
  currentTrack: Track | null;
  isPlaying: boolean;
  duration: number;
  position: number;
  playbackInstance: Audio.Sound | null;
  playTrack: (track: Track) => Promise<void>;
  pauseTrack: () => Promise<void>;
  resumeTrack: () => Promise<void>;
  seekTo: (position: number) => Promise<void>;
  loadTrack: (track: Track) => Promise<void>;
}

const AudioContext = createContext<AudioContextType>({
  currentTrack: null,
  isPlaying: false,
  duration: 0,
  position: 0,
  playbackInstance: null,
  playTrack: async () => {},
  pauseTrack: async () => {},
  resumeTrack: async () => {},
  seekTo: async () => {},
  loadTrack: async () => {},
});

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [playbackInstance, setPlaybackInstance] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    // Setup audio mode
    const setupAudio = async () => {
      try {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          staysActiveInBackground: true,
          interruptionModeIOS: Audio.InterruptionModeIOS.DuckOthers,
          playsInSilentModeIOS: true,
          shouldDuckAndroid: true,
          interruptionModeAndroid: Audio.InterruptionModeAndroid.DuckOthers,
          playThroughEarpieceAndroid: false,
        });
      } catch (e) {
        console.log('Error setting audio mode', e);
      }
    };

    setupAudio();

    // Cleanup function
    return () => {
      if (playbackInstance) {
        playbackInstance.unloadAsync();
      }
    };
  }, []);

  const updatePlaybackStatus = (status: any) => {
    if (status.isLoaded) {
      setDuration(status.durationMillis / 1000);
      setPosition(status.positionMillis / 1000);
      setIsPlaying(status.isPlaying);
    }
  };

  const loadTrack = async (track: Track) => {
    try {
      // Unload current track if exists
      if (playbackInstance) {
        await playbackInstance.unloadAsync();
      }

      const { sound } = await Audio.Sound.createAsync(
        { uri: track.url },
        { shouldPlay: false },
        updatePlaybackStatus
      );

      setPlaybackInstance(sound);
      setCurrentTrack(track);
      return sound;
    } catch (e) {
      console.log('Error loading track', e);
      return null;
    }
  };

  const playTrack = async (track: Track) => {
    try {
      if (currentTrack && currentTrack.id === track.id && playbackInstance) {
        // Same track, just resume
        await playbackInstance.playAsync();
      } else {
        // New track, load and play
        const sound = await loadTrack(track);
        if (sound) {
          await sound.playAsync();
        }
      }
    } catch (e) {
      console.log('Error playing track', e);
    }
  };

  const pauseTrack = async () => {
    if (playbackInstance) {
      try {
        await playbackInstance.pauseAsync();
      } catch (e) {
        console.log('Error pausing track', e);
      }
    }
  };

  const resumeTrack = async () => {
    if (playbackInstance) {
      try {
        await playbackInstance.playAsync();
      } catch (e) {
        console.log('Error resuming track', e);
      }
    }
  };

  const seekTo = async (seekPosition: number) => {
    if (playbackInstance) {
      try {
        await playbackInstance.setPositionAsync(seekPosition * 1000);
      } catch (e) {
        console.log('Error seeking', e);
      }
    }
  };

  return (
    <AudioContext.Provider
      value={{
        currentTrack,
        isPlaying,
        duration,
        position,
        playbackInstance,
        playTrack,
        pauseTrack,
        resumeTrack,
        seekTo,
        loadTrack,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
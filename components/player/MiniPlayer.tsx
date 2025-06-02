import React from 'react';
import { View, StyleSheet, TouchableOpacity, Animated, Platform } from 'react-native';
import { useAudio } from '@/context/AudioContext';
import { useTheme } from '@/context/ThemeContext';
import { Play, Pause, SkipForward } from 'lucide-react-native';
import Typography from '@/components/ui/Typography';
import ProgressBar from './ProgressBar';
import { useRouter } from 'expo-router';

export default function MiniPlayer() {
  const { colors } = useTheme();
  const { currentTrack, isPlaying, duration, position, pauseTrack, resumeTrack } = useAudio();
  const router = useRouter();

  if (!currentTrack) return null;

  const navigateToPlayer = () => {
    router.push('/(tabs)/player');
  };

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: colors.surface,
      borderTopWidth: 1,
      borderTopColor: colors.border,
      padding: 12,
      paddingBottom: Platform.OS === 'ios' ? 32 : 12,
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        android: {
          elevation: 8,
        },
        web: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
      }),
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    infoContainer: {
      flex: 1,
      marginRight: 16,
    },
    controls: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    controlButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 8,
    },
    mainControlButton: {
      backgroundColor: colors.primary,
    },
    title: {
      marginBottom: 2,
    },
    artist: {
      color: colors.textSecondary,
    },
    progress: {
      marginTop: 6,
      marginBottom: -6,
    },
  });

  return (
    <View style={styles.container}>
      <ProgressBar 
        position={position} 
        duration={duration} 
        style={styles.progress} 
        mini={true}
      />
      <TouchableOpacity onPress={navigateToPlayer} activeOpacity={0.8}>
        <View style={styles.content}>
          <View style={styles.infoContainer}>
            <Typography variant="subtitle" style={styles.title} numberOfLines={1}>
              {currentTrack.title}
            </Typography>
            <Typography variant="caption" style={styles.artist} numberOfLines={1}>
              {currentTrack.artist}
            </Typography>
          </View>
          
          <View style={styles.controls}>
            <TouchableOpacity 
              style={[styles.controlButton, styles.mainControlButton]} 
              onPress={isPlaying ? pauseTrack : resumeTrack}
            >
              {isPlaying ? (
                <Pause size={20} color="#FFFFFF" />
              ) : (
                <Play size={20} color="#FFFFFF" />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
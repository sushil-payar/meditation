import React from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useAudio } from '@/context/AudioContext';
import { useTheme } from '@/context/ThemeContext';
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat } from 'lucide-react-native';
import Typography from '@/components/ui/Typography';
import ProgressBar from './ProgressBar';
import { LinearGradient } from 'expo-linear-gradient';

export default function FullPlayer() {
  const { colors, isDark } = useTheme();
  const { currentTrack, isPlaying, duration, position, pauseTrack, resumeTrack } = useAudio();
  const { width } = Dimensions.get('window');

  if (!currentTrack) return null;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    },
    gradient: {
      ...StyleSheet.absoluteFillObject,
    },
    artwork: {
      width: width * 0.7,
      height: width * 0.7,
      borderRadius: 16,
      marginBottom: 40,
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.2,
          shadowRadius: 10,
        },
        android: {
          elevation: 10,
        },
        web: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.2,
          shadowRadius: 10,
        },
      }),
    },
    trackInfo: {
      alignItems: 'center',
      marginBottom: 40,
    },
    controls: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      marginTop: 30,
    },
    secondaryButton: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 16,
    },
    primaryButton: {
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 16,
    },
    progressContainer: {
      width: '100%',
      marginTop: 40,
    },
    extraControls: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '80%',
      marginTop: 30,
    },
  });

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={isDark ? 
          ['#1F2937', '#111827'] : 
          ['#EEF2FF', '#F9FAFB']}
        style={styles.gradient}
      />
      
      <Image 
        source={{ uri: currentTrack.artwork }} 
        style={styles.artwork} 
      />
      
      <View style={styles.trackInfo}>
        <Typography variant="heading2" style={{ marginBottom: 8 }}>
          {currentTrack.title}
        </Typography>
        <Typography variant="subtitle" color={colors.textSecondary}>
          {currentTrack.artist}
        </Typography>
      </View>
      
      <View style={styles.progressContainer}>
        <ProgressBar position={position} duration={duration} />
      </View>
      
      <View style={styles.controls}>
        <TouchableOpacity style={styles.secondaryButton}>
          <SkipBack size={24} color={colors.text} />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={isPlaying ? pauseTrack : resumeTrack}
        >
          {isPlaying ? (
            <Pause size={30} color="#FFFFFF" />
          ) : (
            <Play size={30} color="#FFFFFF" />
          )}
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.secondaryButton}>
          <SkipForward size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.extraControls}>
        <TouchableOpacity>
          <Volume2 size={20} color={colors.textSecondary} />
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Repeat size={20} color={colors.textSecondary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
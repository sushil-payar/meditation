import React from 'react';
import { View, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Typography from '@/components/ui/Typography';
import { useAudio } from '@/context/AudioContext';

interface ProgressBarProps {
  position: number;
  duration: number;
  style?: ViewStyle;
  mini?: boolean;
}

export default function ProgressBar({ 
  position, 
  duration, 
  style,
  mini = false
}: ProgressBarProps) {
  const { colors } = useTheme();
  const { seekTo } = useAudio();
  
  const progressPercentage = duration > 0 ? (position / duration) * 100 : 0;
  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleSeek = (event: any) => {
    if (!mini) {
      const { locationX, target } = event.nativeEvent;
      target.measure((_x: number, _y: number, width: number) => {
        const seekPosition = (locationX / width) * duration;
        seekTo(seekPosition);
      });
    }
  };

  const styles = StyleSheet.create({
    container: {
      width: '100%',
    },
    progressContainer: {
      height: mini ? 3 : 6,
      backgroundColor: colors.border,
      borderRadius: mini ? 1.5 : 3,
      overflow: 'hidden',
    },
    progress: {
      height: '100%',
      backgroundColor: colors.primary,
      borderRadius: mini ? 1.5 : 3,
      width: `${progressPercentage}%`,
    },
    timeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 8,
    },
    timeText: {
      fontSize: 12,
      color: colors.textSecondary,
    },
  });

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        activeOpacity={mini ? 1 : 0.8}
        onPress={mini ? undefined : handleSeek}
        style={styles.progressContainer}
      >
        <View style={styles.progress} />
      </TouchableOpacity>
      
      {!mini && (
        <View style={styles.timeContainer}>
          <Typography variant="caption" color={colors.textSecondary}>
            {formatTime(position)}
          </Typography>
          <Typography variant="caption" color={colors.textSecondary}>
            {formatTime(duration)}
          </Typography>
        </View>
      )}
    </View>
  );
}
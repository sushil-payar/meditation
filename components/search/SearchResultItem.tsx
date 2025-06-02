import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Typography from '@/components/ui/Typography';
import { Play } from 'lucide-react-native';
import { Track } from '@/context/AudioContext';

interface SearchResultItemProps {
  item: Partial<Track>;
  onPress: () => void;
}

export default function SearchResultItem({ item, onPress }: SearchResultItemProps) {
  const { colors } = useTheme();

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} min`;
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    artwork: {
      width: 60,
      height: 60,
      borderRadius: 8,
      marginRight: 16,
    },
    content: {
      flex: 1,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    metaInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 4,
    },
    category: {
      backgroundColor: colors.surface,
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: 4,
      marginRight: 8,
    },
    duration: {
      color: colors.textSecondary,
    },
    playButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <Image source={{ uri: item.artwork }} style={styles.artwork} />
      
      <View style={styles.content}>
        <View style={styles.row}>
          <Typography variant="subtitle" numberOfLines={1} style={{ flex: 1, marginRight: 8 }}>
            {item.title}
          </Typography>
          
          <TouchableOpacity style={styles.playButton} onPress={onPress}>
            <Play size={16} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        
        <Typography variant="caption" color={colors.textSecondary} numberOfLines={1}>
          {item.artist}
        </Typography>
        
        <View style={styles.metaInfo}>
          <View style={styles.category}>
            <Typography variant="caption" color={colors.primary}>
              {item.category}
            </Typography>
          </View>
          
          {item.duration && (
            <Typography variant="caption" style={styles.duration}>
              {formatDuration(item.duration)}
            </Typography>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
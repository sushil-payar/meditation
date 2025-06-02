import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Typography from '@/components/ui/Typography';
import { Music } from 'lucide-react-native';

interface PlaylistItemProps {
  playlist: {
    id: string;
    name: string;
    description: string;
    trackCount: number;
    image: string;
  };
}

export default function PlaylistItem({ playlist }: PlaylistItemProps) {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 12,
      backgroundColor: colors.surface,
      borderRadius: 12,
      marginBottom: 16,
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        android: {
          elevation: 2,
        },
        web: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
      }),
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 8,
    },
    content: {
      flex: 1,
      marginLeft: 16,
      justifyContent: 'center',
    },
    trackCount: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 4,
    },
    trackIcon: {
      marginRight: 4,
    },
    description: {
      marginTop: 4,
      color: colors.textSecondary,
    },
  });

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <Image source={{ uri: playlist.image }} style={styles.image} />
      
      <View style={styles.content}>
        <Typography variant="subtitle">{playlist.name}</Typography>
        
        <View style={styles.trackCount}>
          <Music size={14} color={colors.textSecondary} style={styles.trackIcon} />
          <Typography variant="caption" color={colors.textSecondary}>
            {playlist.trackCount} {playlist.trackCount === 1 ? 'track' : 'tracks'}
          </Typography>
        </View>
        
        <Typography variant="caption" style={styles.description} numberOfLines={2}>
          {playlist.description}
        </Typography>
      </View>
    </TouchableOpacity>
  );
}
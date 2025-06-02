import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Typography from '@/components/ui/Typography';
import ContentCard from '@/components/ui/ContentCard';
import { useAudio } from '@/context/AudioContext';

export default function PopularContent() {
  const { colors } = useTheme();
  const { playTrack } = useAudio();

  const popularContent = [
    {
      id: 'popular1',
      title: 'Deep Sleep Meditation',
      artist: 'Relaxation Guide',
      artwork: 'https://images.pexels.com/photos/2387819/pexels-photo-2387819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Sleep',
      duration: 2700, // 45 minutes
      url: 'https://example.com/audio/deep-sleep.mp3',
    },
    {
      id: 'popular2',
      title: 'Astral Projection Guide',
      artist: 'Spiritual Journeys',
      artwork: 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Advanced',
      duration: 3600, // 60 minutes
      url: 'https://example.com/audio/astral-projection.mp3',
    },
  ];

  const handlePlayTrack = (track: any) => {
    playTrack(track);
  };

  const styles = StyleSheet.create({
    container: {
      marginBottom: 24,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      marginBottom: 12,
    },
    seeAll: {
      color: colors.primary,
    },
    content: {
      paddingHorizontal: 16,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography variant="heading3">Most Popular</Typography>
        <Typography variant="subtitle" style={styles.seeAll}>See All</Typography>
      </View>
      
      <View style={styles.content}>
        {popularContent.map((item) => (
          <ContentCard
            key={item.id}
            item={item}
            onPress={() => handlePlayTrack(item)}
            size="large"
          />
        ))}
      </View>
    </View>
  );
}
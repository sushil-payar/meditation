import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Typography from '@/components/ui/Typography';
import { useAudio } from '@/context/AudioContext';
import SearchResultItem from '../search/SearchResultItem';

export default function FavoriteContent() {
  const { colors } = useTheme();
  const { playTrack } = useAudio();

  const favorites = [
    {
      id: 'fav1',
      title: 'Deep Chakra Meditation',
      artist: 'Sarah Johnson',
      artwork: 'https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Meditation',
      duration: 1320, // 22 minutes
      url: 'https://example.com/audio/chakra-healing.mp3',
    },
    {
      id: 'fav2',
      title: 'Tibetan Singing Bowls',
      artist: 'Ancient Healing',
      artwork: 'https://images.pexels.com/photos/6693860/pexels-photo-6693860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Therapy',
      duration: 2700, // 45 minutes
      url: 'https://example.com/audio/tibetan-bowls.mp3',
    },
    {
      id: 'fav3',
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
      padding: 16,
    },
    emptyContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 40,
    },
    emptyText: {
      textAlign: 'center',
      marginTop: 16,
      color: colors.textSecondary,
    },
  });

  if (favorites.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Typography variant="title">No favorites yet</Typography>
        <Typography variant="body" style={styles.emptyText}>
          Start adding your favorite content to see it here
        </Typography>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {favorites.map((item) => (
        <SearchResultItem
          key={item.id}
          item={item}
          onPress={() => handlePlayTrack(item)}
        />
      ))}
    </View>
  );
}
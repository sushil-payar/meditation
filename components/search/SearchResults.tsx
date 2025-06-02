import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Typography from '@/components/ui/Typography';
import { useAudio } from '@/context/AudioContext';
import SearchResultItem from './SearchResultItem';

interface SearchResultsProps {
  query: string;
}

export default function SearchResults({ query }: SearchResultsProps) {
  const { colors } = useTheme();
  const { playTrack } = useAudio();

  // Mock search results
  const searchResults = [
    {
      id: 'result1',
      title: 'Deep Chakra Meditation',
      artist: 'Sarah Johnson',
      artwork: 'https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Meditation',
      duration: 1320, // 22 minutes
      url: 'https://example.com/audio/chakra-healing.mp3',
    },
    {
      id: 'result2',
      title: '432Hz Healing Tones',
      artist: 'Sound Healers',
      artwork: 'https://images.pexels.com/photos/7135121/pexels-photo-7135121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Frequency',
      duration: 3600, // 60 minutes
      url: 'https://example.com/audio/432hz.mp3',
    },
    {
      id: 'result3',
      title: 'Tibetan Singing Bowls',
      artist: 'Ancient Healing',
      artwork: 'https://images.pexels.com/photos/6693860/pexels-photo-6693860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Therapy',
      duration: 2700, // 45 minutes
      url: 'https://example.com/audio/tibetan-bowls.mp3',
    },
    {
      id: 'result4',
      title: 'Guided Visualization',
      artist: 'Mind Journey',
      artwork: 'https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Meditation',
      duration: 1800, // 30 minutes
      url: 'https://example.com/audio/visualization.mp3',
    },
    {
      id: 'result5',
      title: 'Theta Brainwave Music',
      artist: 'Brainwave Harmony',
      artwork: 'https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Frequency',
      duration: 3600, // 60 minutes
      url: 'https://example.com/audio/theta-waves.mp3',
    },
  ];

  const handlePlayTrack = (track: any) => {
    playTrack(track);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      marginBottom: 16,
    },
    resultsCount: {
      color: colors.textSecondary,
      marginTop: 4,
    },
    emptyContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
    },
    emptyText: {
      textAlign: 'center',
      marginTop: 16,
      color: colors.textSecondary,
    },
  });

  const filteredResults = searchResults.filter(
    item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.artist.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredResults.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Typography variant="title">No results found</Typography>
        <Typography variant="body" style={styles.emptyText}>
          Try searching with different keywords or browse categories
        </Typography>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography variant="heading3">Search Results</Typography>
        <Typography variant="body" style={styles.resultsCount}>
          {filteredResults.length} {filteredResults.length === 1 ? 'result' : 'results'} for "{query}"
        </Typography>
      </View>
      
      <FlatList
        data={filteredResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SearchResultItem
            item={item}
            onPress={() => handlePlayTrack(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
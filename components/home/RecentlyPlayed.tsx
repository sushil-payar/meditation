import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Typography from '@/components/ui/Typography';
import ContentCard from '@/components/ui/ContentCard';
import { useAudio } from '@/context/AudioContext';

export default function RecentlyPlayed() {
  const { colors } = useTheme();
  const { playTrack } = useAudio();

  const recentTracks = [
    {
      id: 'recent1',
      title: 'Mindfulness Meditation',
      artist: 'Michael Chen',
      artwork: 'https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Meditation',
      duration: 900, // 15 minutes
      url: 'https://example.com/audio/mindfulness.mp3',
    },
    {
      id: 'recent2',
      title: '528Hz Healing',
      artist: 'Healing Vibrations',
      artwork: 'https://images.pexels.com/photos/3107895/pexels-photo-3107895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Frequency',
      duration: 3600, // 60 minutes
      url: 'https://example.com/audio/528hz.mp3',
    },
    {
      id: 'recent3',
      title: 'Ocean Waves',
      artist: 'Nature Sounds',
      artwork: 'https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Nature',
      duration: 3600, // 60 minutes
      url: 'https://example.com/audio/ocean.mp3',
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
    listContainer: {
      paddingLeft: 16,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography variant="heading3">Recently Played</Typography>
        <Typography variant="subtitle" style={styles.seeAll}>See All</Typography>
      </View>
      
      <FlatList
        data={recentTracks}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={{ marginRight: 16 }}>
            <ContentCard
              item={item}
              onPress={() => handlePlayTrack(item)}
              size="medium"
            />
          </View>
        )}
      />
    </View>
  );
}
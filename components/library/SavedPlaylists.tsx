import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Typography from '@/components/ui/Typography';
import { CirclePlus as PlusCircle } from 'lucide-react-native';
import PlaylistItem from './PlaylistItem';

export default function SavedPlaylists() {
  const { colors } = useTheme();

  const playlists = [
    {
      id: 'playlist1',
      name: 'Morning Meditation',
      description: 'Start your day with these calming meditations',
      trackCount: 5,
      image: 'https://images.pexels.com/photos/3571551/pexels-photo-3571551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'playlist2',
      name: 'Healing Frequencies',
      description: 'A collection of solfeggio frequencies for healing',
      trackCount: 7,
      image: 'https://images.pexels.com/photos/3328264/pexels-photo-3328264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'playlist3',
      name: 'Sleep Better',
      description: 'Sounds to help you fall asleep faster',
      trackCount: 4,
      image: 'https://images.pexels.com/photos/2387819/pexels-photo-2387819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    createButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.surface,
      padding: 16,
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
    plusIcon: {
      marginRight: 12,
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.createButton} activeOpacity={0.7}>
        <PlusCircle size={24} color={colors.primary} style={styles.plusIcon} />
        <Typography variant="subtitle">Create New Playlist</Typography>
      </TouchableOpacity>
      
      {playlists.map((playlist) => (
        <PlaylistItem key={playlist.id} playlist={playlist} />
      ))}
    </View>
  );
}
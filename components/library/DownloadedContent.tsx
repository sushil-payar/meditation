import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Typography from '@/components/ui/Typography';
import { useAudio } from '@/context/AudioContext';
import SearchResultItem from '../search/SearchResultItem';
import Button from '../ui/Button';
import { Download } from 'lucide-react-native';

export default function DownloadedContent() {
  const { colors } = useTheme();
  const { playTrack } = useAudio();

  // Mock downloaded tracks - empty for demo
  const downloads: any[] = [];

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
      marginBottom: 24,
      color: colors.textSecondary,
    },
    icon: {
      marginBottom: 16,
      opacity: 0.5,
    },
  });

  if (downloads.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Download size={48} color={colors.textSecondary} style={styles.icon} />
        <Typography variant="title">No downloads yet</Typography>
        <Typography variant="body" style={styles.emptyText}>
          Download your favorite content to listen offline
        </Typography>
        <Button
          title="Browse Content"
          variant="primary"
          onPress={() => {}}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {downloads.map((item) => (
        <SearchResultItem
          key={item.id}
          item={item}
          onPress={() => handlePlayTrack(item)}
        />
      ))}
    </View>
  );
}
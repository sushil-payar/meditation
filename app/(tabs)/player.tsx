import { View, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAudio } from '@/context/AudioContext';
import { useTheme } from '@/context/ThemeContext';
import FullPlayer from '@/components/player/FullPlayer';
import Typography from '@/components/ui/Typography';

export default function PlayerScreen() {
  const { colors } = useTheme();
  const { currentTrack } = useAudio();
  const { width } = Dimensions.get('window');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
    },
    emptyMessage: {
      textAlign: 'center',
      paddingHorizontal: 40,
      marginTop: 20,
    },
  });

  if (!currentTrack) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Typography variant="title" style={styles.emptyMessage}>
            No audio is currently playing
          </Typography>
          <Typography variant="body" style={styles.emptyMessage}>
            Select a meditation or healing track from the library to begin your journey
          </Typography>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FullPlayer />
    </SafeAreaView>
  );
}
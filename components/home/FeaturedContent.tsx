import React from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import { Play } from 'lucide-react-native';
import { useAudio } from '@/context/AudioContext';
import { LinearGradient } from 'expo-linear-gradient';

export default function FeaturedContent() {
  const { colors } = useTheme();
  const { playTrack } = useAudio();

  const featuredContent = {
    id: 'featured1',
    title: 'Deep Chakra Healing Meditation',
    artist: 'Sarah Johnson',
    description: 'Balance your energy centers with this powerful guided meditation',
    artwork: 'https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Meditation',
    duration: 1320, // 22 minutes
    url: 'https://example.com/audio/chakra-healing.mp3',
  };

  const handlePlay = () => {
    playTrack(featuredContent);
  };

  const styles = StyleSheet.create({
    container: {
      marginBottom: 24,
    },
    imageBackground: {
      height: 240,
      borderRadius: 16,
      overflow: 'hidden',
      marginHorizontal: 16,
    },
    gradient: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'flex-end',
      padding: 16,
    },
    badge: {
      position: 'absolute',
      top: 16,
      left: 16,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 20,
    },
    contentContainer: {
      justifyContent: 'flex-end',
    },
    titleContainer: {
      width: '80%',
      marginBottom: 12,
    },
    description: {
      marginTop: 4,
      marginBottom: 12,
      opacity: 0.9,
    },
    buttonContainer: {
      flexDirection: 'row',
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.9} onPress={handlePlay}>
        <ImageBackground
          source={{ uri: featuredContent.artwork }}
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 16 }}
        >
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={styles.gradient}
          >
            <View style={styles.badge}>
              <Typography variant="caption" color="#FFFFFF">
                Featured
              </Typography>
            </View>
            
            <View style={styles.contentContainer}>
              <View style={styles.titleContainer}>
                <Typography variant="heading3" color="#FFFFFF">
                  {featuredContent.title}
                </Typography>
                <Typography variant="subtitle" color="#FFFFFF">
                  {featuredContent.artist}
                </Typography>
                <Typography variant="caption" color="#FFFFFF" style={styles.description}>
                  {featuredContent.description}
                </Typography>
              </View>
              
              <View style={styles.buttonContainer}>
                <Button
                  title="Play Now"
                  variant="primary"
                  size="small"
                  icon={<Play size={16} color="#FFFFFF" />}
                  onPress={handlePlay}
                />
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}
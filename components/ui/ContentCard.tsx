import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions, Platform } from 'react-native';
import Typography from './Typography';
import { useTheme } from '@/context/ThemeContext';
import { Play } from 'lucide-react-native';
import { Track } from '@/context/AudioContext';

interface ContentCardProps {
  item: Partial<Track>;
  onPress: () => void;
  size?: 'small' | 'medium' | 'large';
}

export default function ContentCard({ 
  item, 
  onPress, 
  size = 'medium' 
}: ContentCardProps) {
  const { colors } = useTheme();
  const { width } = Dimensions.get('window');

  const getCardSize = () => {
    switch (size) {
      case 'small':
        return {
          width: width / 3 - 16,
          height: width / 3 - 16,
        };
      case 'medium':
        return {
          width: width / 2 - 24,
          height: width / 2 - 24,
        };
      case 'large':
        return {
          width: width - 32,
          height: width / 2,
        };
      default:
        return {
          width: width / 2 - 24,
          height: width / 2 - 24,
        };
    }
  };

  const cardSize = getCardSize();

  const styles = StyleSheet.create({
    container: {
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: 16,
      backgroundColor: colors.surface,
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        android: {
          elevation: 4,
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
      width: cardSize.width,
      height: cardSize.height,
      resizeMode: 'cover',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      justifyContent: 'space-between',
    },
    content: {
      padding: 12,
    },
    titleContainer: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    playButton: {
      position: 'absolute',
      right: 12,
      bottom: 12,
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    category: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 4,
      alignSelf: 'flex-start',
      margin: 12,
    },
  });

  return (
    <TouchableOpacity style={[styles.container, { width: cardSize.width }]} onPress={onPress}>
      <Image 
        source={{ uri: item.artwork }} 
        style={styles.image} 
      />
      <View style={styles.overlay}>
        <View style={styles.category}>
          <Typography variant="caption" color="#FFFFFF">
            {item.category}
          </Typography>
        </View>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Typography variant={size === 'large' ? 'heading3' : 'subtitle'} color="#FFFFFF">
              {item.title}
            </Typography>
            {item.artist && (
              <Typography variant="caption" color="#FFFFFF">
                {item.artist}
              </Typography>
            )}
          </View>
        </View>
        <TouchableOpacity style={styles.playButton} onPress={onPress}>
          <Play size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
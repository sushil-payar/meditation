import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Typography from '@/components/ui/Typography';
import ContentCard from '@/components/ui/ContentCard';
import { useAudio } from '@/context/AudioContext';

interface CategorySectionProps {
  title: string;
  description: string;
  category: string;
}

export default function CategorySection({ 
  title, 
  description,
  category 
}: CategorySectionProps) {
  const { colors } = useTheme();
  const { playTrack } = useAudio();

  // Mock data based on category
  const getCategoryItems = () => {
    const categoryData = {
      meditation: [
        {
          id: 'med1',
          title: 'Chakra Balancing',
          artist: 'Emma Wilson',
          artwork: 'https://images.pexels.com/photos/8964432/pexels-photo-8964432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          category: 'Meditation',
          duration: 1800, // 30 minutes
          url: 'https://example.com/audio/chakra-balancing.mp3',
        },
        {
          id: 'med2',
          title: 'Breath Awareness',
          artist: 'David Kim',
          artwork: 'https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          category: 'Meditation',
          duration: 1200, // 20 minutes
          url: 'https://example.com/audio/breath-awareness.mp3',
        },
        {
          id: 'med3',
          title: 'Loving Kindness',
          artist: 'Sarah Johnson',
          artwork: 'https://images.pexels.com/photos/2597205/pexels-photo-2597205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          category: 'Meditation',
          duration: 900, // 15 minutes
          url: 'https://example.com/audio/loving-kindness.mp3',
        },
      ],
      frequency: [
        {
          id: 'freq1',
          title: '432Hz Healing',
          artist: 'Sound Healers',
          artwork: 'https://images.pexels.com/photos/7135121/pexels-photo-7135121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          category: 'Frequency',
          duration: 3600, // 60 minutes
          url: 'https://example.com/audio/432hz.mp3',
        },
        {
          id: 'freq2',
          title: '528Hz DNA Repair',
          artist: 'Quantum Vibrations',
          artwork: 'https://images.pexels.com/photos/269583/pexels-photo-269583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          category: 'Frequency',
          duration: 3600, // 60 minutes
          url: 'https://example.com/audio/528hz-dna.mp3',
        },
        {
          id: 'freq3',
          title: '639Hz Harmonize',
          artist: 'Healing Vibrations',
          artwork: 'https://images.pexels.com/photos/33779/hand-witchcraft-magic-wand.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          category: 'Frequency',
          duration: 3600, // 60 minutes
          url: 'https://example.com/audio/639hz.mp3',
        },
      ],
      therapy: [
        {
          id: 'therapy1',
          title: 'Tibetan Bowls',
          artist: 'Ancient Healing',
          artwork: 'https://images.pexels.com/photos/6693860/pexels-photo-6693860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          category: 'Therapy',
          duration: 2700, // 45 minutes
          url: 'https://example.com/audio/tibetan-bowls.mp3',
        },
        {
          id: 'therapy2',
          title: 'Rain & Thunder',
          artist: 'Nature Sounds',
          artwork: 'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          category: 'Therapy',
          duration: 3600, // 60 minutes
          url: 'https://example.com/audio/rain-thunder.mp3',
        },
        {
          id: 'therapy3',
          title: 'Crystal Bowls',
          artist: 'Crystal Healing',
          artwork: 'https://images.pexels.com/photos/4271933/pexels-photo-4271933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          category: 'Therapy',
          duration: 2400, // 40 minutes
          url: 'https://example.com/audio/crystal-bowls.mp3',
        },
      ],
    };

    return categoryData[category] || [];
  };

  const items = getCategoryItems();

  const handlePlayTrack = (track: any) => {
    playTrack(track);
  };

  const styles = StyleSheet.create({
    container: {
      marginBottom: 24,
    },
    header: {
      paddingHorizontal: 16,
      marginBottom: 8,
    },
    description: {
      marginTop: 4,
      marginBottom: 12,
      color: colors.textSecondary,
    },
    listContainer: {
      paddingLeft: 16,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography variant="heading3">{title}</Typography>
        <Typography variant="body" style={styles.description}>
          {description}
        </Typography>
      </View>
      
      <FlatList
        data={items}
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
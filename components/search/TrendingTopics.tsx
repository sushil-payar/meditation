import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Typography from '@/components/ui/Typography';

export default function TrendingTopics() {
  const { colors } = useTheme();

  const topics = [
    { id: 'trend1', name: 'Sleep Meditation' },
    { id: 'trend2', name: 'Anxiety Relief' },
    { id: 'trend3', name: '528Hz Healing' },
    { id: 'trend4', name: 'Chakra Balancing' },
    { id: 'trend5', name: 'Third Eye Opening' },
    { id: 'trend6', name: 'Lucid Dreaming' },
    { id: 'trend7', name: 'Astral Projection' },
    { id: 'trend8', name: 'Manifestation' },
  ];

  const styles = StyleSheet.create({
    container: {
      marginBottom: 24,
    },
    heading: {
      marginBottom: 16,
    },
    topicsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    topicButton: {
      backgroundColor: colors.surface,
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
      marginRight: 8,
      marginBottom: 8,
      borderWidth: 1,
      borderColor: colors.border,
    },
    topicText: {
      color: colors.primary,
    },
  });

  return (
    <View style={styles.container}>
      <Typography variant="heading3" style={styles.heading}>
        Trending Topics
      </Typography>
      
      <View style={styles.topicsContainer}>
        {topics.map((topic) => (
          <TouchableOpacity key={topic.id} style={styles.topicButton} activeOpacity={0.7}>
            <Typography variant="body" style={styles.topicText}>
              {topic.name}
            </Typography>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
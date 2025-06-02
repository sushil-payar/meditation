import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, Platform } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Typography from '@/components/ui/Typography';
import { Music, Brain, Zap, Heart, Moon, Leaf } from 'lucide-react-native';

export default function CategoryList() {
  const { colors } = useTheme();

  const categories = [
    { id: 'med', name: 'Meditation', icon: <Brain size={24} color={colors.primary} /> },
    { id: 'freq', name: 'Frequencies', icon: <Zap size={24} color={colors.secondary} /> },
    { id: 'therapy', name: 'Sound Therapy', icon: <Music size={24} color={colors.accent} /> },
    { id: 'sleep', name: 'Sleep', icon: <Moon size={24} color="#9333EA" /> },
    { id: 'nature', name: 'Nature', icon: <Leaf size={24} color="#10B981" /> },
    { id: 'healing', name: 'Healing', icon: <Heart size={24} color="#F43F5E" /> },
  ];

  const styles = StyleSheet.create({
    container: {
      marginBottom: 24,
    },
    heading: {
      marginBottom: 16,
    },
    categoryContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    categoryItem: {
      width: '48%',
      backgroundColor: colors.surface,
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      flexDirection: 'row',
      alignItems: 'center',
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
    iconContainer: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
    },
  });

  return (
    <View style={styles.container}>
      <Typography variant="heading3" style={styles.heading}>
        Browse Categories
      </Typography>
      
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryItem} activeOpacity={0.7}>
            <View style={styles.iconContainer}>
              {category.icon}
            </View>
            <Typography variant="subtitle">{category.name}</Typography>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
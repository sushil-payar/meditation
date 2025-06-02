import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Typography from '@/components/ui/Typography';

interface LibraryTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function LibraryTabs({ activeTab, setActiveTab }: LibraryTabsProps) {
  const { colors } = useTheme();

  const tabs = [
    { id: 'playlists', name: 'Playlists' },
    { id: 'favorites', name: 'Favorites' },
    { id: 'downloads', name: 'Downloads' },
  ];

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    tabButton: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      marginRight: 8,
    },
    activeTab: {
      borderBottomWidth: 2,
      borderBottomColor: colors.primary,
    },
    tabText: {
      color: colors.textSecondary,
    },
    activeTabText: {
      color: colors.primary,
      fontFamily: 'Inter-SemiBold',
    },
  });

  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <TouchableOpacity
            key={tab.id}
            style={[styles.tabButton, isActive && styles.activeTab]}
            onPress={() => setActiveTab(tab.id)}
            activeOpacity={0.7}
          >
            <Typography 
              variant="subtitle"
              style={isActive ? styles.activeTabText : styles.tabText}
            >
              {tab.name}
            </Typography>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
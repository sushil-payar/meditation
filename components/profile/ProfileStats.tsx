import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Typography from '@/components/ui/Typography';
import { Clock, CirclePlay as PlayCircle, Headphones } from 'lucide-react-native';

export default function ProfileStats() {
  const { colors } = useTheme();

  const stats = [
    {
      id: 'time',
      icon: <Clock size={24} color={colors.primary} />,
      value: '42h',
      label: 'Total Time',
    },
    {
      id: 'sessions',
      icon: <PlayCircle size={24} color={colors.secondary} />,
      value: '86',
      label: 'Sessions',
    },
    {
      id: 'streak',
      icon: <Headphones size={24} color={colors.accent} />,
      value: '12',
      label: 'Day Streak',
    },
  ];

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: colors.surface,
      borderRadius: 12,
      padding: 16,
      marginBottom: 20,
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
    statItem: {
      alignItems: 'center',
      flex: 1,
    },
    statValue: {
      marginTop: 8,
      marginBottom: 4,
    },
    statLabel: {
      color: colors.textSecondary,
    },
  });

  return (
    <View style={styles.container}>
      {stats.map((stat) => (
        <View key={stat.id} style={styles.statItem}>
          {stat.icon}
          <Typography variant="heading3" style={styles.statValue}>
            {stat.value}
          </Typography>
          <Typography variant="caption" style={styles.statLabel}>
            {stat.label}
          </Typography>
        </View>
      ))}
    </View>
  );
}
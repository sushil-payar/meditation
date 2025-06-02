import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Typography from '@/components/ui/Typography';

export default function MeditationStreak() {
  const { colors } = useTheme();

  // Mock data for meditation streak
  const days = [
    { day: 'Mon', completed: true },
    { day: 'Tue', completed: true },
    { day: 'Wed', completed: true },
    { day: 'Thu', completed: true },
    { day: 'Fri', completed: true },
    { day: 'Sat', completed: true },
    { day: 'Sun', completed: false, isToday: true },
  ];

  const styles = StyleSheet.create({
    container: {
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
    title: {
      marginBottom: 16,
    },
    streakContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 8,
    },
    dayContainer: {
      alignItems: 'center',
    },
    dayCircle: {
      width: 36,
      height: 36,
      borderRadius: 18,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 4,
    },
    completedCircle: {
      backgroundColor: colors.primary,
    },
    todayCircle: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: colors.primary,
      borderStyle: 'dashed',
    },
    incompleteCircle: {
      backgroundColor: colors.border,
    },
    dayText: {
      color: colors.textSecondary,
    },
    streakText: {
      textAlign: 'center',
      marginTop: 16,
      color: colors.primary,
    },
  });

  return (
    <View style={styles.container}>
      <Typography variant="subtitle" style={styles.title}>
        Your Meditation Streak
      </Typography>
      
      <View style={styles.streakContainer}>
        {days.map((day, index) => {
          let circleStyle;
          if (day.completed) {
            circleStyle = styles.completedCircle;
          } else if (day.isToday) {
            circleStyle = styles.todayCircle;
          } else {
            circleStyle = styles.incompleteCircle;
          }
          
          return (
            <View key={index} style={styles.dayContainer}>
              <View style={[styles.dayCircle, circleStyle]}>
                <Typography 
                  variant="caption" 
                  color={day.completed || !day.isToday ? '#FFFFFF' : colors.primary}
                >
                  {index + 1}
                </Typography>
              </View>
              <Typography variant="caption" style={styles.dayText}>
                {day.day}
              </Typography>
            </View>
          );
        })}
      </View>
      
      <Typography variant="body" style={styles.streakText}>
        You're on a 12-day streak! 🔥
      </Typography>
    </View>
  );
}
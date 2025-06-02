import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Typography from '@/components/ui/Typography';

export default function JourneyProgress() {
  const { colors } = useTheme();

  // Mock data for journey progress
  const journeyItems = [
    { title: 'Beginner Meditator', completed: true, date: 'Apr 12, 2025' },
    { title: 'Completed 10 Sessions', completed: true, date: 'Apr 18, 2025' },
    { title: '7-Day Streak', completed: true, date: 'Apr 24, 2025' },
    { title: 'First Sound Bath', completed: false },
    { title: '30-Day Streak', completed: false },
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
    journeyItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    statusIndicator: {
      width: 20,
      height: 20,
      borderRadius: 10,
      marginRight: 12,
    },
    completedIndicator: {
      backgroundColor: colors.primary,
    },
    incompleteIndicator: {
      borderWidth: 2,
      borderColor: colors.border,
    },
    journeyLine: {
      position: 'absolute',
      left: 10,
      top: 20,
      width: 2,
      height: '100%',
      backgroundColor: colors.border,
      zIndex: -1,
    },
    content: {
      flex: 1,
    },
    date: {
      marginTop: 2,
      color: colors.textSecondary,
    },
  });

  return (
    <View style={styles.container}>
      <Typography variant="subtitle" style={styles.title}>
        Your Spiritual Journey
      </Typography>
      
      <View style={{ position: 'relative' }}>
        <View style={styles.journeyLine} />
        
        {journeyItems.map((item, index) => (
          <View key={index} style={styles.journeyItem}>
            <View 
              style={[
                styles.statusIndicator, 
                item.completed ? styles.completedIndicator : styles.incompleteIndicator
              ]} 
            />
            
            <View style={styles.content}>
              <Typography 
                variant="body"
                color={item.completed ? colors.text : colors.textSecondary}
              >
                {item.title}
              </Typography>
              
              {item.date && (
                <Typography variant="caption" style={styles.date}>
                  {item.date}
                </Typography>
              )}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
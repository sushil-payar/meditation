import React from 'react';
import { View, StyleSheet, Platform, ViewStyle } from 'react-native';
import Typography from './Typography';
import { useTheme } from '@/context/ThemeContext';

interface HeaderProps {
  title: string;
  showLogo?: boolean;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  style?: ViewStyle;
}

export default function Header({
  title,
  showLogo = false,
  leftComponent,
  rightComponent,
  style,
}: HeaderProps) {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 16,
      backgroundColor: colors.background,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.05,
          shadowRadius: 1,
        },
        android: {
          elevation: 1,
        },
        web: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.05,
          shadowRadius: 1,
        },
      }),
    },
    titleContainer: {
      flex: 1,
      alignItems: 'center',
    },
    side: {
      width: 40,
    },
    logo: {
      color: colors.primary,
    },
  });

  return (
    <View style={[styles.header, style]}>
      <View style={styles.side}>
        {leftComponent}
      </View>

      <View style={styles.titleContainer}>
        <Typography 
          variant="heading3" 
          style={showLogo ? styles.logo : undefined}
        >
          {title}
        </Typography>
      </View>

      <View style={styles.side}>
        {rightComponent}
      </View>
    </View>
  );
}
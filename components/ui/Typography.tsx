import React from 'react';
import { Text, StyleSheet, TextStyle, TextProps } from 'react-native';
import { useTheme } from '@/context/ThemeContext';

type TypographyVariant = 
  | 'heading1' 
  | 'heading2' 
  | 'heading3' 
  | 'title' 
  | 'subtitle' 
  | 'body' 
  | 'caption' 
  | 'button';

interface TypographyProps extends TextProps {
  variant?: TypographyVariant;
  color?: string;
  style?: TextStyle;
  children: React.ReactNode;
}

export default function Typography({ 
  variant = 'body', 
  color,
  style,
  children,
  ...props 
}: TypographyProps) {
  const { colors } = useTheme();
  
  const getStyles = () => {
    const baseStyle: TextStyle = {
      color: color || colors.text,
    };

    switch (variant) {
      case 'heading1':
        return {
          ...baseStyle,
          fontFamily: 'Inter-Bold',
          fontSize: 32,
          lineHeight: 38,
        };
      case 'heading2':
        return {
          ...baseStyle,
          fontFamily: 'Inter-Bold',
          fontSize: 24,
          lineHeight: 32,
        };
      case 'heading3':
        return {
          ...baseStyle,
          fontFamily: 'Inter-SemiBold',
          fontSize: 20,
          lineHeight: 28,
        };
      case 'title':
        return {
          ...baseStyle,
          fontFamily: 'Inter-SemiBold',
          fontSize: 18,
          lineHeight: 24,
        };
      case 'subtitle':
        return {
          ...baseStyle,
          fontFamily: 'Inter-Medium',
          fontSize: 16,
          lineHeight: 22,
        };
      case 'body':
        return {
          ...baseStyle,
          fontFamily: 'Inter-Regular',
          fontSize: 16,
          lineHeight: 24,
        };
      case 'caption':
        return {
          ...baseStyle,
          fontFamily: 'Inter-Regular',
          fontSize: 14,
          lineHeight: 20,
        };
      case 'button':
        return {
          ...baseStyle,
          fontFamily: 'Inter-Medium',
          fontSize: 16,
          lineHeight: 24,
        };
      default:
        return baseStyle;
    }
  };

  const textStyles = [getStyles(), style];

  return (
    <Text style={textStyles} {...props}>
      {children}
    </Text>
  );
}
import React from 'react';
import { View, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Typography from '@/components/ui/Typography';
import { Moon, Bell, Lock, CircleHelp as HelpCircle, LogOut } from 'lucide-react-native';

interface SettingsSectionProps {
  toggleTheme: () => void;
}

export default function SettingsSection({ toggleTheme }: SettingsSectionProps) {
  const { colors, isDark } = useTheme();

  const settingsItems = [
    {
      id: 'darkMode',
      icon: <Moon size={20} color={colors.textSecondary} />,
      title: 'Dark Mode',
      hasSwitch: true,
      value: isDark,
      onValueChange: toggleTheme,
    },
    {
      id: 'notifications',
      icon: <Bell size={20} color={colors.textSecondary} />,
      title: 'Notifications',
      hasSwitch: true,
      value: true,
      onValueChange: () => {},
    },
    {
      id: 'privacy',
      icon: <Lock size={20} color={colors.textSecondary} />,
      title: 'Privacy & Security',
      hasSwitch: false,
      onPress: () => {},
    },
    {
      id: 'help',
      icon: <HelpCircle size={20} color={colors.textSecondary} />,
      title: 'Help & Support',
      hasSwitch: false,
      onPress: () => {},
    },
    {
      id: 'logout',
      icon: <LogOut size={20} color={colors.error} />,
      title: 'Log Out',
      hasSwitch: false,
      titleColor: colors.error,
      onPress: () => {},
    },
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
    settingItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    lastItem: {
      borderBottomWidth: 0,
    },
    icon: {
      marginRight: 12,
    },
    content: {
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <Typography variant="subtitle" style={styles.title}>
        Settings
      </Typography>
      
      {settingsItems.map((item, index) => (
        <TouchableOpacity
          key={item.id}
          style={[
            styles.settingItem,
            index === settingsItems.length - 1 && styles.lastItem
          ]}
          onPress={item.hasSwitch ? undefined : item.onPress}
          activeOpacity={item.hasSwitch ? 1 : 0.7}
        >
          <View style={styles.icon}>{item.icon}</View>
          
          <View style={styles.content}>
            <Typography 
              variant="body"
              color={item.titleColor || colors.text}
            >
              {item.title}
            </Typography>
          </View>
          
          {item.hasSwitch && (
            <Switch
              value={item.value}
              onValueChange={item.onValueChange}
              trackColor={{ false: colors.border, true: colors.primary }}
              thumbColor="#FFFFFF"
            />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}
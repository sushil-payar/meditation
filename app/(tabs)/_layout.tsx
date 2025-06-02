import { Tabs } from 'expo-router';
import { Platform, View } from 'react-native';
import { Chrome as Home, Search, Library, User, Play } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';
import MiniPlayer from '@/components/player/MiniPlayer';
import { AudioProvider } from '@/context/AudioContext';

export default function TabLayout() {
  const { theme, colors } = useTheme();
  const iconSize = 24;

  return (
    <AudioProvider>
      <View style={{ flex: 1 }}>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: colors.background,
              borderTopColor: colors.border,
              height: Platform.OS === 'ios' ? 88 : 60,
              paddingBottom: Platform.OS === 'ios' ? 28 : 8,
              paddingTop: 8,
            },
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.textSecondary,
            tabBarLabelStyle: {
              fontFamily: 'Inter-Medium',
              fontSize: 12,
              marginTop: -4,
            },
          }}>
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color }) => <Home size={iconSize} color={color} />,
            }}
          />
          <Tabs.Screen
            name="search"
            options={{
              title: 'Discover',
              tabBarIcon: ({ color }) => <Search size={iconSize} color={color} />,
            }}
          />
          <Tabs.Screen
            name="player"
            options={{
              title: 'Playing',
              tabBarIcon: ({ color }) => <Play size={iconSize} color={color} />,
            }}
          />
          <Tabs.Screen
            name="library"
            options={{
              title: 'Library',
              tabBarIcon: ({ color }) => <Library size={iconSize} color={color} />,
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              title: 'Profile',
              tabBarIcon: ({ color }) => <User size={iconSize} color={color} />,
            }}
          />
        </Tabs>
        <MiniPlayer />
      </View>
    </AudioProvider>
  );
}
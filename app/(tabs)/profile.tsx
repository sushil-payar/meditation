import { ScrollView, View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/ui/Header';
import ProfileStats from '@/components/profile/ProfileStats';
import MeditationStreak from '@/components/profile/MeditationStreak';
import JourneyProgress from '@/components/profile/JourneyProgress';
import SettingsSection from '@/components/profile/SettingsSection';
import { useTheme } from '@/context/ThemeContext';
import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import { Settings } from 'lucide-react-native';

export default function ProfileScreen() {
  const { colors, toggleTheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollView: {
      flex: 1,
    },
    content: {
      padding: 16,
      paddingBottom: 90, // Space for mini player
    },
    profileHeader: {
      alignItems: 'center',
      marginVertical: 20,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 12,
    },
    nameText: {
      marginTop: 8,
    },
    emailText: {
      marginTop: 4,
      color: colors.textSecondary,
    },
    settingsButton: {
      position: 'absolute',
      right: 16,
      top: 16,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Profile" rightComponent={
        <Button 
          icon={<Settings size={24} color={colors.text} />}
          variant="ghost"
          onPress={() => {}}
          style={styles.settingsButton}
        />
      } />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.profileHeader}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/1687675/pexels-photo-1687675.jpeg?auto=compress&cs=tinysrgb&w=400' }}
              style={styles.profileImage}
            />
            <Typography variant="title">Sarah Thompson</Typography>
            <Typography variant="body" style={styles.emailText}>sarah@example.com</Typography>
            <Button 
              title="Edit Profile" 
              variant="outline" 
              onPress={() => {}}
              style={{ marginTop: 16 }}
            />
          </View>
          
          <ProfileStats />
          <MeditationStreak />
          <JourneyProgress />
          <SettingsSection toggleTheme={toggleTheme} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
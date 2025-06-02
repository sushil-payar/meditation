import { ScrollView, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/ui/Header';
import FeaturedContent from '@/components/home/FeaturedContent';
import RecentlyPlayed from '@/components/home/RecentlyPlayed';
import CategorySection from '@/components/home/CategorySection';
import PopularContent from '@/components/home/PopularContent';
import { useTheme } from '@/context/ThemeContext';

export default function HomeScreen() {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollView: {
      flex: 1,
    },
    content: {
      paddingBottom: 90, // Space for mini player
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header title="SoulStream" showLogo />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <FeaturedContent />
          <RecentlyPlayed />
          <CategorySection 
            title="Peaceful Meditations" 
            description="Guided sessions for inner peace"
            category="meditation" 
          />
          <CategorySection 
            title="Healing Frequencies" 
            description="Solfeggio and binaural beats for healing"
            category="frequency" 
          />
          <CategorySection 
            title="Sound Therapy" 
            description="Therapeutic sounds for mind and body"
            category="therapy" 
          />
          <PopularContent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
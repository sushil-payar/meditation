import { ScrollView, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/ui/Header';
import LibraryTabs from '@/components/library/LibraryTabs';
import SavedPlaylists from '@/components/library/SavedPlaylists';
import FavoriteContent from '@/components/library/FavoriteContent';
import DownloadedContent from '@/components/library/DownloadedContent';
import { useTheme } from '@/context/ThemeContext';
import { useState } from 'react';

export default function LibraryScreen() {
  const { colors } = useTheme();
  const [activeTab, setActiveTab] = useState('playlists');

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

  const renderContent = () => {
    switch (activeTab) {
      case 'playlists':
        return <SavedPlaylists />;
      case 'favorites':
        return <FavoriteContent />;
      case 'downloads':
        return <DownloadedContent />;
      default:
        return <SavedPlaylists />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Your Library" />
      <LibraryTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {renderContent()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
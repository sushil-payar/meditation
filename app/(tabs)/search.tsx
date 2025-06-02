import { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '@/components/search/SearchBar';
import SearchResults from '@/components/search/SearchResults';
import CategoryList from '@/components/search/CategoryList';
import TrendingTopics from '@/components/search/TrendingTopics';
import { useTheme } from '@/context/ThemeContext';

export default function SearchScreen() {
  const { colors } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

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
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 16, paddingTop: 16 }}>
        <SearchBar 
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search meditations, music, and more..."
        />
      </View>
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {searchQuery ? (
            <SearchResults query={searchQuery} />
          ) : (
            <>
              <CategoryList />
              <TrendingTopics />
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
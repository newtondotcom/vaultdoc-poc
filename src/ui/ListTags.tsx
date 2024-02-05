import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

interface ListTagsProps {
  tags: string[];
  onPressTag: (tag: string) => void;
}

const ListTags: React.FC<ListTagsProps> = ({ tags, onPressTag }) => {
  const renderTag = ({ item }: { item: string }) => (
    <TouchableOpacity style={styles.tagContainer} onPress={() => onPressTag(item)}>
      <Text style={styles.tagText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={tags}
      renderItem={renderTag}
      keyExtractor={(item) => item}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.tagList}
    />
  );
};

const styles = StyleSheet.create({
  tagList: {
    paddingVertical: 8,
  },
  tagContainer: {
    backgroundColor: 'lightblue',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 8,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ListTags;

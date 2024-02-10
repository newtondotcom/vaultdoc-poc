import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ListTagsProps {
  tags: string[];
  onPressTag?: (tag: string) => void;
}

const ListTags: React.FC<ListTagsProps> = ({ tags, onPressTag }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const renderTag = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={[
        styles.tagContainer,
        { backgroundColor: selectedTags.includes(item) ? 'blue' : 'lightblue' },
      ]}
      onPress={() => handleTagPress(item)}
      disabled={!onPressTag}
    >
      <Text style={styles.tagText}>{item}</Text>
    </TouchableOpacity>
  );

  const handleTagPress = (tag: string) => {
    if (!onPressTag) {
      return;
    }
  
    if (selectedTags.includes(tag)) {
      // If the clicked tag is already selected, deselect it
      setSelectedTags([]);
      onPressTag('');
    } else {
      // Deselect the previously selected tag (if any) and select the new tag
      setSelectedTags([tag]);
      onPressTag(tag);
    }
  };  

  const handleClearPress = () => {
    if (onPressTag){
    setSelectedTags([]);
    onPressTag('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tags}
        renderItem={renderTag}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tagList}
      />
      {selectedTags.length > 0 && (
        <TouchableOpacity style={[styles.tagContainer, styles.clearButton]} onPress={handleClearPress}>
          <Text style={[styles.tagText, styles.clearButtonText]}>
            <Icon name="clear" size={14} color="#900" />
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  tagList: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  tagContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 8,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  clearButton: {
    backgroundColor: 'lightcoral', // Adjust the color as needed
  },
  clearButtonText: {
    color: 'white', // Adjust the text color as needed
  },
});

export default ListTags;

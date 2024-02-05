import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, FlatList, Image, Dimensions, ListRenderItem } from 'react-native';
import ListTags from '../ui/ListTags';

interface Document {
  id: number;
  title: string;
  image: string;
  tags: string[];
}

interface VaultScreenProps {}

function VaultScreen({}: VaultScreenProps) {
  const documents: Document[] = [
    {
      id: 1,
      title: 'Passport',
      image: 'https://media.graphiline.com/graphiline/43490/canada-impression-securisee-passeport-11.jpg',
      tags: ['Travel', 'ID'],
    },
    {
      id: 2,
      title: 'Driver License',
      image: 'https://images.eplaque.fr/wp-content/uploads/2020/04/18145834/Visuel-permis-conduire-recto2.jpg',
      tags: ['ID'],
    },
    {
      id: 3,
      title: 'Birth Certificate',
      image: 'https://amp.gdoc.io/uploads/Birth-Certificate-w-984x712.jpg',
      tags: ['ID'],
    },
  ];

  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const renderItem: ListRenderItem<Document> = ({ item }) => {
    const itemWidth = (Dimensions.get('window').width - 40) / 2;

    return (
      <View style={[styles.document, { width: itemWidth }]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={{ uri: item.image }} style={{ width: '100%', height: 200 }} />
        <ListTags tags={item.tags}/>
      </View>
    );
  };

  const navigation = useNavigation();

  const handleTagPress = (tag: string) => {
        setSelectedFilter(tag);
  };

  const filteredDocuments = selectedFilter
    ? documents.filter((document) => document.tags.includes(selectedFilter))
    : documents;

  return (
    <View style={{ flex: 1 }}>
      <ListTags tags={['Travel', 'ID']} onPressTag={handleTagPress} />
      <FlatList
        data={filteredDocuments}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.container}
      />
    </View>
  );
}

const styles = {
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  document: {
    flex: 1,
    marginBottom: 20,
    backgroundColor: '#ececec',
    borderRadius: 8,
    margin: 5,
  },
  title: {
    padding: 8,
    fontWeight: 'bold',
  },
};

export default VaultScreen;

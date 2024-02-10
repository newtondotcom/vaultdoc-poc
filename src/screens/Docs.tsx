import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, FlatList, Image, Dimensions, ListRenderItem, StyleSheet, Pressable } from 'react-native';
import ListTags from '../ui/ListTags';
import ModalAdd from '../ui/ModalAdd';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface Document {
  id: number;
  title: string;
  image: string;
  tags: string[];
}

interface VaultScreenProps {}

function DocsScreen({}: VaultScreenProps) {
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
      tags: ['Lol'],
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
      <Pressable style={[styles.document, { width: itemWidth }]} 
      onPress={() => navigation.navigate('Document')}
      onLongPress={() => console.log('long press')}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Image source={{ uri: item.image }} style={{ width: '100%', height: 200 }} />
        <ListTags tags={item.tags}/>
      </Pressable>
    );
  };

  const navigation = useNavigation();


  const [modalVisible, setModalVisible] = useState(false);

  const handleTagPress = (tag: string) => {
        setSelectedFilter(tag);
  };

  const filteredDocuments = selectedFilter
    ? documents.filter((document) => document.tags.includes(selectedFilter))
    : documents;

  return (
    <View style={styles.page}>
      <ModalAdd modalVisible={modalVisible} setModalVisible={setModalVisible}/>
      <ListTags tags={['Travel', 'ID','Lol']} onPressTag={handleTagPress} />
      <FlatList
        data={filteredDocuments}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.container}
      />
      <View style={styles.ModalButton}>
        <Icon name="plus-square" size={30} color="black" onPress={() => setModalVisible(true)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  ModalButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor : '#e89bdd',
    borderRadius : 2000,
    padding : 10,
  },
  page : {

  }
});

export default DocsScreen;

import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, FlatList, Image, Dimensions, ListRenderItem, StyleSheet, Pressable } from 'react-native';
import ListTags from '../ui/ListTags';
import ModalAdd from '../ui/ModalAdd';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface Document {
  id: number;
  title: string;
  count : number;
}

interface FolderScreenProps {}

function FolderScreen({}: FolderScreenProps) {
  const documents: Document[] = [
    {
      id: 1,
      title: 'Passport',
      count : 1,
    },
    {
      id: 2,
      title: 'Driver License',
      count : 2,
    },
    {
      id: 3,
      title: 'Birth Certificate',
      count : 3,
    },
  ];

  const renderItem: ListRenderItem<Document> = ({ item }) => {
    const itemWidth = (Dimensions.get('window').width - 40) / 2;

    return (
      <Pressable style={[styles.document, { width: itemWidth }]} 
      onPress={() => navigation.navigate('DocsScreen')}
      onLongPress={() => console.log('long press')}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Icon name="folder" size={100} color="black" style={styles.icon} />
        <Text style={styles.count}>{item.count} documents</Text>
      </Pressable>
    );
  };

  const navigation = useNavigation();
  const filteredDocuments = documents;


  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.page}>
      <ModalAdd modalVisible={modalVisible} setModalVisible={setModalVisible}/>
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
  icon : {
    alignSelf : 'center',
  },
  count : {
    padding : 8,
    fontWeight : "300",
  },
  page : {
  }
});

export default FolderScreen;

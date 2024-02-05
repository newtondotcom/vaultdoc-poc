import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, FlatList, Image, Dimensions, Touchable, TouchableOpacity } from 'react-native';
import ListTags from '../ui/ListTags';

function VaultScreen() {
  const documents = [
    {
      id: 1,
      title: 'Passport',
      image: "https://media.graphiline.com/graphiline/43490/canada-impression-securisee-passeport-11.jpg",
      tags: ["Travel", "ID"]
    },
    {
      id: 2,
      title: 'Driver License',
      image: "https://images.eplaque.fr/wp-content/uploads/2020/04/18145834/Visuel-permis-conduire-recto2.jpg",
      tags: ["ID"]
    },
    {
      id: 3,
      title: 'Birth Certificate',
      image: "https://amp.gdoc.io/uploads/Birth-Certificate-w-984x712.jpg",
      tags: ["ID"]
    }
  ];

  const renderItem = ({ item }) => {
    const itemWidth = (Dimensions.get('window').width - 40) / 2;
  
    return (
      <View style={[styles.document, { width: itemWidth }]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={{ uri: item.image }} style={{ width: '100%', height: 200 }} />
        <View style={styles.tag_container}>
          {item.tags.map((tag, index) => (
            <Text key={index} style={styles.tag}>{tag}</Text>
          ))}
        </View>
      </View>
    );
  };
  
  const navigation = useNavigation();   

  return (
    <FlatList
      data={documents}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
      ListHeaderComponent={() => (
        < ListTags tags={["Travel", "ID"]} onPressTag={(tag) => navigation.navigate('Tag', { tag })} />
      )}
    />
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
    fontWeight: 'bold'
  },
  tag: {
    backgroundColor: 'lightgray',
    padding: 8,
    borderRadius: 8,
    margin: 4
  },
  tag_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8
  }
};

export default VaultScreen;

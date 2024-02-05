import React from 'react';
import { View, Text, Dimensions, StyleSheet, Pressable } from 'react-native';
import Pdf from 'react-native-pdf';
import { Share } from "react-native";

const Document = () => {
  
  const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
  //const source = require('./test.pdf');  // ios only
  //const source = {uri:'bundle-assets://test.pdf' };
  //const source = {uri:'file:///sdcard/test.pdf'};
  //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
  //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
  //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};


  const url = "data:application/pdf;base64,JVBERi0xLjQKJcfsj6IKMjYgM...";
  return (
      <View style={styles.container}>
          <Pdf
              source={source}
              onLoadComplete={(numberOfPages,filePath) => {
                  console.log(`Number of pages: ${numberOfPages}`);
              }}
              onPageChanged={(page,numberOfPages) => {
                  console.log(`Current page: ${page}`);
              }}
              onError={(error) => {
                  console.log(error);
              }}
              onPressLink={(uri) => {
                  console.log(`Link pressed: ${uri}`);
              }}
              trustAllCerts={false}
              style={styles.pdf}/>
            <Pressable onPress={async () => 
await Share.share({ url })}>
              <Text>Share</Text>
            </Pressable>
      </View>
  )
};

export default Document;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 25,
  },
  pdf: {
      flex:1,
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
  }
});

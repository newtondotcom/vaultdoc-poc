import React from 'react';
import { View, Text, Dimensions, StyleSheet, Pressable } from 'react-native';
import Pdf from 'react-native-pdf';
import { sharePDF } from '../ui/Share';
import mockData from '../utils/mock';

const Document = () => {
  //const pdf = "https://web.wpi.edu/Images/CMS/Provost/landscape.pdf";
  const source = { uri: 'https://web.wpi.edu/Images/CMS/Provost/landscape.pdf', cache: true };
  //const source = require('./test.pdf');  // ios only
  //const source = {uri:'bundle-assets://test.pdf' };
  //const source = {uri:'file:///sdcard/test.pdf'};
  //const source = {uri:"data:application/pdf;base64,"+mockData.document};
  //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
  //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};


  //const url = "data:application/pdf;base64,JVBERi0xLjIgDQo5IDAgb2JqDQo8PA0KPj4NCnN0cmVhbQ0KQlQvIDMyIFRmKCAgSGVsbG8gV29ybGQgICApJyBFVA0KZW5kc3RyZWFtDQplbmRvYmoNCjQgMCBvYmoNCjw8DQovVHlwZSAvUGFnZQ0KL1BhcmVudCA1IDAgUg0KL0NvbnRlbnRzIDkgMCBSDQo+Pg0KZW5kb2JqDQo1IDAgb2JqDQo8PA0KL0tpZHMgWzQgMCBSIF0NCi9Db3VudCAxDQovVHlwZSAvUGFnZXMNCi9NZWRpYUJveCBbIDAgMCAyNTAgNTAgXQ0KPj4NCmVuZG9iag0KMyAwIG9iag0KPDwNCi9QYWdlcyA1IDAgUg0KL1R5cGUgL0NhdGFsb2cNCj4+DQplbmRvYmoNCnRyYWlsZXINCjw8DQovUm9vdCAzIDAgUg0KPj4NCiUlRU9G";
  //const urlb64 = "JVBERi0xLjIgDQo5IDAgb2JqDQo8PA0KPj4NCnN0cmVhbQ0KQlQvIDMyIFRmKCAgSGVsbG8gV29ybGQgICApJyBFVA0KZW5kc3RyZWFtDQplbmRvYmoNCjQgMCBvYmoNCjw8DQovVHlwZSAvUGFnZQ0KL1BhcmVudCA1IDAgUg0KL0NvbnRlbnRzIDkgMCBSDQo+Pg0KZW5kb2JqDQo1IDAgb2JqDQo8PA0KL0tpZHMgWzQgMCBSIF0NCi9Db3VudCAxDQovVHlwZSAvUGFnZXMNCi9NZWRpYUJveCBbIDAgMCAyNTAgNTAgXQ0KPj4NCmVuZG9iag0KMyAwIG9iag0KPDwNCi9QYWdlcyA1IDAgUg0KL1R5cGUgL0NhdGFsb2cNCj4+DQplbmRvYmoNCnRyYWlsZXINCjw8DQovUm9vdCAzIDAgUg0KPj4NCiUlRU9G"; 
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
            <Pressable 
                style={{marginBottom: 120}}
            onPress={async () => sharePDF(mockData.document)}>
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

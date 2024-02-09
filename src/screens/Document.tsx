import React from 'react';
import { View, Text, Dimensions, StyleSheet, Pressable, ShareContent } from 'react-native';
import Pdf from 'react-native-pdf';
import { Share } from "react-native";
import mockData from '../utils/mock';

const Document = () => {

    const sharePDF = async () => {
        try {
            let content : ShareContent = {
                title: "Title", // android only
                message: "Your pdf is here!",
                url: "data:application/pdf;base64,"+mockData.document, // ios only
            };
            let options : ShareOptions = {
                dialogTitle: "Share PDF", // android only
                excludedActivityTypes: [
                    //"com.apple.UIKit.activity.PostToTwitter"
                ], // ios only
                tintColor: "green", // ios only
                subject: "Subject" // ios only for email
            };
            const result = await Share.share(content, options);
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            console.log(error.message);
        }
    }
  
    const source = { uri: 'https://web.wpi.edu/Images/CMS/Provost/landscape.pdf', cache: true };
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
            <Pressable style={{paddingBottom:50}} onPress={sharePDF}>
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

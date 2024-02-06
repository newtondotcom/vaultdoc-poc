import { Platform, Share, ShareContent } from "react-native";
import RNFetchBlob from "rn-fetch-blob";
import RNFS from "react-native-fs";

export const sharePDF = async (fileUrl: string) => {
    if (Platform.OS === 'ios') {
        sharePDFWithIOS(fileUrl);
    } else {
        sharePDFWithAndroid(fileUrl);
    }
};

const DIRS = RNFetchBlob.fs.dirs;

function sharePDFWithIOS(fileUrl: string) {
    let filePath: string | null = null;
    const configOptions = {
        fileCache: true,
        path: DIRS.DocumentDir + '/SomeFileName.pdf'
    };
    RNFetchBlob.config(configOptions)
        .fetch('GET', fileUrl)
        .then(async (resp: any) => {
            filePath = resp.path();
            if (filePath) {
                let options : ShareContent = {
                    title: 'Share PDF',
                    url: filePath
                };
                await Share.share(options);
                // remove the pdf from device's storage
                await RNFS.unlink(filePath);
            }
        });
}

function sharePDFWithAndroid(fileUrl: string) {
    let filePath: string | null = null;
    const configOptions = { fileCache: true };
    RNFetchBlob.config(configOptions)
        .fetch('GET', fileUrl)
        .then((resp: any) => {
            filePath = resp.path();
            return resp.readFile('base64');
        })
        .then(async (base64Data: string) => {
            base64Data = `data:application/pdf;base64,` + base64Data;
            await Share.share({ url: base64Data, title: 'Share PDF'});
            await RNFS.unlink(filePath!);
        });
}

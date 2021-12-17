import React, {useState} from "react";
import {RNCamera} from 'react-native-camera';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

function Bar(){

    const [camera, setCamera] = useState(false);
    const [codeBar, setCodeBar] = useState(null);


    const onBarCodeRead = (e) => {
        setCodeBar(e.data);
        setCamera(false);
        console.log(e.data);
    };
    return(
        <View style={styles.container}>
            <RNCamera
               style={styles.preview}
                type={RNCamera.Constants.Type.front}
                flashMode={RNCamera.Constants.FlashMode.off}
                onBarCodeRead={e => {onBarCodeRead(e)}}
                autoFocus={RNCamera.Constants.AutoFocus.on}
                
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        width: '100%',
        height: '100%',
        marginTop:20,
        alignSelf:'center',
        position:'absolute',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
    });

export default Bar;
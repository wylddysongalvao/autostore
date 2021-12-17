import React, {useEffect, useState} from "react";
import Scann from '../../components/scann';
import Home from '../sale/index';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import api from '../../api/index.js';

import {
    View, 
    Text, 
    Button,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Dimensions, 
    PixelRatio
} from "react-native";

import Colors from '../../components/styles/colors.js'


function Login({navigation}) {

  const [qrcode, setQrcode] = useState('');
  const [signIn, setSignIn] = useState(false);
  const [loading, setLoading] = useState(false);


  const Auth = async (e) => {

      setLoading(true);

      
      await api.post('/auth', {
        qrcode: e.data
      }).then(async (res) => {

        const {name, token, user_id, admin} = res.data;
       
        setTimeout( async () => {
          try{
            const adminString = JSON.stringify(admin);
            await AsyncStorage.setItem('@name', name);
            await AsyncStorage.setItem('@token', token);
            await AsyncStorage.setItem('@user_id', user_id);
            
            if(admin){
              await AsyncStorage.setItem('@admin', adminString);
            }


            setLoading(false);

            setSignIn(true);

            navigation.navigate('Home');
          }catch(e){
            console.log(e);
          }
        
        }, 2000);

      }).catch(err => {
        setLoading(false);
        setSignIn(false);
      })
  }

    return (
    <>
      {loading ? 
        <>
           <StatusBar hidden  />
        <LottieView style={{backgroundColor:Colors.primaryDark}} source={require('../../assets/loading.json')}  colorFilters={[
            {
              keypath: 'button',
              color: '#000',
            },
            {
              keypath: 'Sending Loader',
              color: '#000',
            },
          ]}
          autoPlay
          loop />
          </> 
          :
        <>
          <StatusBar hidden  />

          <SafeAreaView
              style={styles.container}
          >
              <StatusBar 
              color={Colors.primary}
              translucent={true}
              />
    
              <View style={styles.boxTop}>
    
              </View>
              <Scann qrcode={e => {Auth(e)}} />
              <View style={styles.boxTop}>
    
              </View>
            
          </SafeAreaView>
        </>
         }
    </>
    )
     
      
}

const widthPercentageToDP = widthPercent => {
    const screenWidth = Dimensions.get('window').width;
    return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
  };
  
  const heightPercentageToDP = heightPercent => {
    const screenHeight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100);
  };


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: Colors.primary,
    },
    boxTop:{
        backgroundColor: Colors.primary,
        height: heightPercentageToDP('5%'),
        width: widthPercentageToDP('100%'),
    },

});

export default Login;
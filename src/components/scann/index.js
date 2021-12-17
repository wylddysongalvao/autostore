'use strict';

import React, { Component } from 'react';

import {
    StyleSheet,
    Linking,
    View,
    StatusBar,
    SafeAreaView,
    Text
  } from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

  class ScanScreen extends Component {

  
    
    onSuccess = e => {
      Linking.openURL(e.data).catch(err =>
        console.error('An error occured', err)
      );
    };

  
    render() {
      const { qrcode } = this.props
      return (
                <QRCodeScanner
                    onRead={qrcode}
                    cameraType={1}
                    showMarker={true}
                    reactivate={false}

                />
      );    
    }

  }

 

  export default ScanScreen;